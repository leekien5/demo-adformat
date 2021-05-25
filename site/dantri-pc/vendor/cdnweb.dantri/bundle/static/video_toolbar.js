// -*- Mode: c++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
//
// Copyright (C) 2017 Opera Software AS.  All rights reserved.
//
// This file is an original work developed by Opera Software AS

'use strict';

class VideoToolbar {
  static get VISIBLE_CSS_CLASS() { return 'visible'; }
  static get HIDDEN_CSS_CLASS() { return 'hide'; }
  static get HIDE_TIMEOUT() { return 3000; }
  static get TIMEOUT_UPDATE() { return 100; }
  static get MIN_VIDEO_DURATION() { return 15; }
  static get HOST() { return ['div']; }
  static get CONTAINER_TOP_OFFSET() { return 12; }
  static get CONTAINER_WIDTH() {
    return 2 * (Button.WIDTH + Button.MARGIN);
  }
  static get CONTAINER_HEIGHT() { return Button.HEIGHT; }
  static get CONTAINER() {
    return [
      'div',
      {'class': 'container'},
      ['div', {'class': 'button-container'}],
    ]
  }
  static get CLOSE_IMAGE_1X() {
     return chrome.extension.getURL('images/icon_close_1x.png');
  }
  static get CLOSE_IMAGE_2X() {
      return chrome.extension.getURL('images/icon_close_2x.png');
  }
  static get STYLE() {
    return [
      'style',
      {'type': 'text/css'},
      `
        :host {
          --opera-video-toolbar-button-color: #0199FF;
          font-family: system-ui;
          min-height: ${this.CONTAINER_HEIGHT + this.CONTAINER_TOP_OFFSET}px;
          overflow: visible;
          pointer-events: none;
          position: fixed;
          top: 0;
          width: ${this.CONTAINER_WIDTH}px;
          z-index: 2147483647;
        }
        .container {
          clip: rect(0px, 10000px, ${
                                     this.CONTAINER_HEIGHT +
                                     this.CONTAINER_TOP_OFFSET
                                   }px, 0px);
          position: absolute;
          height: ${this.CONTAINER_HEIGHT + this.CONTAINER_TOP_OFFSET}px;
        }

        .button-container {
          box-sizing: border-box;
          display: flex;
          justify-content: space-around;
          height: ${this.CONTAINER_HEIGHT}px;
          pointer-events: none;
          position: absolute;
          text-align: center;
          top: -${this.CONTAINER_HEIGHT}px;
          transition: top .3s;
      }

      .custom-button-wrapper {
        box-sizing: border-box;
        overflow: visible;
        pointer-events: none;
      }

      .custom-button {
        background: linear-gradient(rgba(103,105,105,0.5),
                                    rgba(68,70,71,0.5));
        border-radius: ${Button.HEIGHT / 2}px;
        font-size: 0px;
        line-height: ${Button.HEIGHT}px;
        pointer-events: initial;
        white-space: nowrap;
        margin: 0 ${Button.MARGIN}px;
      }

      .custom-button:hover {
        background: linear-gradient(rgba(103,105,105,0.75),
                                    rgba(68,70,71,0.75));
      }

      .custom-button[active] {
        background: var(--opera-video-toolbar-button-color) !important;
      }

      .custom-button-contents {
        align-items: center;
        display: inline-flex;
        height: ${Button.HEIGHT}px;
        justify-content: center;
        pointer-events: none;
        vertical-align: middle;
      }

      .custom-button-image {
        width: ${Button.WIDTH}px;
      }

      .custom-button-image .image {
        background-repeat: no-repeat;
        background-position: center left;
        background-size: cover;
        height: 16px;
        width: 20px;
      }

      .custom-button-text {
        color: white;
        display: inline-block;
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
        padding: 0;
        transition: all .2s;
      }

      .custom-button-text[enabled] {
        max-width: 999px;
        opacity: 1;
        padding: 0 10px 0 0;
        transition: all .2s;
      }

      .custom-button[active][hovered] .custom-button-image .image:not(.animating) {
        background-image: -webkit-image-set(
            url(${this.CLOSE_IMAGE_1X}) 1x,
            url(${this.CLOSE_IMAGE_2X}) 2x
        ) !important;
      }

      .custom-button[inactive] {
        background: linear-gradient(rgba(103,105,105,0.25),
                                    rgba(68,70,71,0.25)) !important;
      }

      .custom-button[inactive] .custom-button-contents {
        opacity: 0.25;
      }

      .custom-button[disabled] {
        display: none;
      }

      .button-container.${this.VISIBLE_CSS_CLASS} {
        top: ${this.CONTAINER_TOP_OFFSET}px;
      }

      .button-container.${this.HIDDEN_CSS_CLASS} {
        visibility: hidden;
      }
    `,
    ];
  }
  static get COVERPOINTS() {
    return [
      [0, 0],
      [0, this.CONTAINER_HEIGHT / 2],
      [0, this.CONTAINER_HEIGHT],
      [this.CONTAINER_WIDTH / 2, 0],
      [this.CONTAINER_WIDTH / 2, this.CONTAINER_HEIGHT / 2],
      [this.CONTAINER_WIDTH / 2, this.CONTAINER_HEIGHT],
      [this.CONTAINER_WIDTH, 0],
      [this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT / 2],
      [this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT],
    ]
  }

  video() {
    return this.video_;
  }

  isTracking() {
    return Boolean(this.video_);
  }

  isTrackingVideo_(video) {
    return this.isTracking() && this.video_ === video;
  }

  setButtonsVisibility_(isVisible) {
    this.buttons_.forEach(b => {
      if (isVisible) {
        b.onVisible();
      } else {
        b.onHidden();
      }
    });

    this.button_container_.classList.toggle(
        this.constructor.VISIBLE_CSS_CLASS, isVisible);
  }

  setHideTimeout_(timeout) {
    this.hideTimestamp_ = Date.now() + timeout;
  }

  isVideoTooSmall_(video) {
    if (!video.videoHeight || !video.videoWidth) {
      return true;
    }
    const player = video[VideoHandler.PLAYER_ELEMENT] || video;
    if (player.offsetHeight < Button.HEIGHT * 3 ||
        player.offsetWidth < Button.WIDTH * 3) {
      return true;
    }

    return false;
  }

  canTrack_(video) {
    return !(
        document.webkitIsFullScreen || document.hidden ||
        !this.buttons_.some(b => b.isAvailable(video)) ||
        !video.parentElement || this.isVideoTooSmall_(video) ||
        video.duration < this.constructor.MIN_VIDEO_DURATION);
  }

  onCanTrackChange_() {
    if (this.isTracking() && !this.canTrack_(this.video_)) {
      this.button_container_.classList.add(this.constructor.HIDDEN_CSS_CLASS);
      this.untrack_(this.video_);
    }
  }

  onVideoAreaOver_(video) {
    if (this.mouseMoveCallbackId_) {
      return;
    }

    const id = this.mouseMoveCallbackId_ = this.runInIdlePeriod_(() => {
      if (this.mouseMoveCallbackId_ !== id) {
        return;
      }
      this.mouseMoveCallbackId_ = null;
      if (this.isTrackingVideo_(video)) {
        this.setHideTimeout_(this.constructor.HIDE_TIMEOUT);
      } else {
        this.track_(video);
      }
    }, 500, 0);
  }

  onVideoAreaOut_(video) {
    this.mouseMoveCallbackId_ = null;
    if (this.isTrackingVideo_(video)) {
      this.setHideTimeout_(0);
    }
  }

  onVideoSourceChange_(video) {
    this.untrack_(video);
  }

  createButtonsConatinerElement_() {
    this.host_ = BragiElementFactory.bragiToElement(this.constructor.HOST);
    this.host_.id = 'detach-button-host';
    this.root_ = this.host_.attachShadow({mode: 'open'});
    this.root_.appendChild(
        BragiElementFactory.bragiToElement(this.constructor.STYLE));
    this.root_.appendChild(BragiElementFactory.bragiToElement(Hint.STYLE));

    let container =
        BragiElementFactory.bragiToElement(this.constructor.CONTAINER);
    this.button_container_ = container.firstChild;
    this.buttons_.forEach(b => {
      const button = b.button();

      this.root_.appendChild(b.constructor.STYLE);
      this.button_container_.appendChild(button);

      // <if expr="is_product_gx">
      // GX Accent Color
      opr.palette.getColorHSL('gx_accent', ({h, s, l}) => {
        this.host_.style.setProperty(
          '--opera-video-toolbar-button-color',
          `hsl(${h}, ${s * 100}%, ${l * 100}%)`
        );
      });

      opr.palette.onPaletteChanged.addListener(() => {
        opr.palette.getColorHSL('gx_accent', ({h, s, l}) => {
          this.host_.style.setProperty(
            '--opera-video-toolbar-button-color',
            `hsl(${h}, ${s * 100}%, ${l * 100}%)`
          );
        });
      });
      // </if>
    });
    this.button_container_.addEventListener(
        'mouseenter', () => this.rootHovered_ = true);
    this.button_container_.addEventListener(
        'mouseleave', () => this.rootHovered_ = false);
    this.root_.appendChild(container);

    document.addEventListener('webkitfullscreenchange',
        () => this.onCanTrackChange_());
    document.addEventListener('visibilitychange',
        () => this.onCanTrackChange_());
  }

  registerVideoListeners_(video) {
    video.addEventListener('emptied', () => this.onVideoSourceChange_(video));
    video.addEventListener(
        'mousemove', () => VideoHandler.Events.onVideoAreaOver.dispatch(video));
    video.addEventListener('playing', () => this.track_(video));
  }

  runInIdlePeriod_(callback, timeout, delay) {
    return window.setTimeout(
        () => window.requestIdleCallback(callback, {'timeout': timeout}),
        delay);
  }

  searchForVideoElements_() {
    let videos = Array.from(document.getElementsByTagName('video'));
    videos = videos.filter(video => !this.seenVideoElements_.has(video));
    if (videos.length && !this.button_container_) {
      this.createButtonsConatinerElement_();
    }

    let videoToTrack = null;
    videos.forEach(video => {
      this.seenVideoElements_.add(video);
      this.registerVideoListeners_(video);
      this.buttons_.forEach(b => b.registerVideoListeners(video))
      VideoHandler.Events.onCreate.dispatch(video);
      if (!video.paused) {
        videoToTrack = video;
      }
    });

    if (videoToTrack) {
      this.track_(videoToTrack);
    }
  }

  show_() {
    this.setHideTimeout_(this.constructor.HIDE_TIMEOUT);
    if (!this.host_.parentElement) {
      document.documentElement.appendChild(this.host_);
      // make sure that the appear effect will be animated.
      this.runInIdlePeriod_(
          () => this.setButtonsVisibility_(true), 100,
          this.constructor.TIMEOUT_UPDATE / 2);
    } else {
      this.setButtonsVisibility_(true);
    }

    this.updatePosition_(this.video_);
  }

  track_(video) {
    if (this.isTrackingVideo_(video)) {
      if (this.canTrack_(video)) {
        this.setHideTimeout_(this.constructor.HIDE_TIMEOUT);
      } else {
        this.untrack_(this.video_);
      }
    } else {
      this.untrack_(this.video_);
      if (this.canTrack_(video)) {
        this.video_ = video;
        this.buttons_.forEach(b => b.updateState(this.video_));
        this.show_();
      }
    }
  }

  untrack_(video) {
    if (!this.isTrackingVideo_(video)) {
      return;
    }

    this.setButtonsVisibility_(false);
    this.video_ = null;
    if (this.hasVisibleHint_) {
      this.hint_.hide();
    }
  }

  updatePosition_(video) {
    if (!this.isTrackingVideo_(video)) {
      return;
    }

    if (Date.now() > this.hideTimestamp_ && !this.rootHovered_ &&
        !this.hasVisibleHint_ && !this.buttons_.some(b => b.isToggled(video))) {
      this.untrack_(video);
      return;
    }

    let element = video[VideoHandler.PLAYER_ELEMENT] || video;
    let elementRect = element.getBoundingClientRect();
    let top = elementRect.top;
    let left = elementRect.left;
    let right = elementRect.right;
    let isInsideScrolledElement = false;
    while (element.parentElement) {
      element = element.parentElement;
      const styles = window.getComputedStyle(element);
      if (styles.overflow === 'hidden') {
        elementRect = element.getBoundingClientRect();
        top = Math.max(elementRect.top, top);
        left = Math.max(elementRect.left, left);
        right = Math.min(elementRect.right, right);
      } else if (element.scrollTop || element.scrollLeft) {
        isInsideScrolledElement = true;
      }

      if (styles.position === 'fixed') {
        break;
      }
    }

    let buttons_width = 0;
    let i = 0;
    let visible_buttons = 0;
    for (; i < this.button_container_.children.length; i++) {
      if (!this.button_container_.children[i].firstChild.hasAttribute(
              'disabled')) {
        buttons_width += Button.WIDTH;
        if (visible_buttons > 0) {
          buttons_width += 2 * Button.MARGIN;
        }
        visible_buttons++;
      }
    }
    left = (left + right - buttons_width) / 2;
    this.host_.style.top = `${top}px`;
    this.host_.style.left = `${left}px`;

    let isCovered = false;
    if (isInsideScrolledElement) {
      isCovered = this.constructor.COVERPOINTS.some(point => {
        let elements =
            document.elementsFromPoint(left + point[0], top + point[1]);
        elements = elements.filter(element => element !== this.host_);
        for (let element of elements) {
          if (element === this.video_) {
            break;
          } else {
            if (window.getComputedStyle(element).position === 'fixed') {
              return true;
            }
          }
        }

        return false;
      });
    }
    this.button_container_.classList.toggle(
        this.constructor.HIDDEN_CSS_CLASS, isCovered);

    this.runInIdlePeriod_(() => this.updatePosition_(video), 100,
                          this.constructor.TIMEOUT_UPDATE);
  }

  showHint(target, data) {
    let targetRect = target.getBoundingClientRect();
    let rootRect = this.host_.getBoundingClientRect();
    this.hint_ = new Hint(this.root_, data);
    this.hint_.show(
        targetRect.right - rootRect.left,
        (targetRect.top - rootRect.top) + targetRect.height / 2);
  }

  get hasVisibleHint_() { return this.hint_ && this.hint_.isVisible; }
}

new VideoToolbar();
