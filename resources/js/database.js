// Database name
const list = {
    devices : [
        { name: 'Display', value: 'display' },
        { name: 'Mobile', value: 'mobile' },
        { name: 'Video', value: 'video' },
    ],
    domains : [
        { name: 'Demo', value: '' },
        { name: 'Media', value: 'media' },
    ],
    templates : [
        //Display Templates
        { name: 'Dân Trí', value: 'dtpc', type: 'display', img: '../resources/images/backgrounds/dantripc.jpg' },
        { name: 'Phụ Nữ Today', value: 'pntpc', type: 'display', img: '../resources/images/backgrounds/phunutodaypc.jpg' },
        { name: 'Thể Thao 247', value: 'tt247pc', type: 'display', img: '../resources/images/backgrounds/thethao247pc.jpg' },
        { name: 'Phụ Nữ Online', value: 'pnopc', type: 'display', img: '../resources/images/backgrounds/phunuonlinepc.jpg' },
        { name: 'Default', value: 'idpc', type: 'display', img: '../resources/images/backgrounds/defaultpc.jpg' },
        //Mobile Templates
        { name: 'Dân Trí', value: 'dtmb', type: 'mobile', img: '../resources/images/backgrounds/dantrimb.jpg' },
        { name: 'Phụ Nữ Today', value: 'pntmb', type: 'mobile', img: '../resources/images/backgrounds/phunutodaymb.jpg' },
        { name: 'Thể Thao 247', value: 'tt247mb', type: 'mobile', img: '../resources/images/backgrounds/thethao247mb.jpg' },
        { name: 'Phụ Nữ Online', value: 'pnomb', type: 'mobile', img: '../resources/images/backgrounds/phunuonlinemb.jpg' },
        { name: 'Default', value: 'idmb', type: 'mobile', img: '../resources/images/backgrounds/defaultmb.jpg' },
        //Video Templates
        { name: 'Default', value: 'idvd', type: 'video', img: '../resources/images/backgrounds/defaultvd.jpg' },
        { name: 'Bóng Đá 24h', value: 'bd24hvd', type: 'video', img: '../resources/images/backgrounds/bongda24hvd.jpg' },
        { name: 'Tiin', value: 'tiinvd', type: 'video', img: '../resources/images/backgrounds/tiinvd.jpg' },
    ],
    adformats : [
        //Display Adformats
        { name: 'Display Balloon', value: 'balloon-pc', type: 'display' },
        { name: 'Display Balloon Popup Expandable', value: 'balloon-popup-pc', type: 'display' },
        { name: 'Display Big Balloon', value: 'big-balloon-pc', type: 'display' },
        { name: 'Display Masthead (Billboard)', value: 'masthead-pc', type: 'display' },
        { name: 'Display Bottom Up', value: 'bottom-up-pc', type: 'display' },
        { name: 'Display In Image Native', value: 'in-native-pc', type: 'display' },
        { name: 'Display In Image Takeover', value: 'in-takeover-pc', type: 'display' },
        { name: 'Display In Image Carousel', value: 'in-carousel-pc', type: 'display' },
        { name: 'Display In Image With Inread Video', value: 'in-inread-pc', type: 'display' },
        { name: 'Display On Image', value: 'on-image-pc', type: 'display' },
        { name: 'Display 3D Post Carousel', value: '3d-post-carousel-pc', type: 'display' },
        { name: 'Display Medium Rectangle (300x250)', value: 'medium-rectangle-pc', type: 'display' },
        { name: 'Display Half Page (300x600)', value: 'half-page-pc', type: 'display' },
        //Mobile Adformats
        { name: 'Mobile Masthead', value: 'masthead-mb', type: 'mobile' },
        { name: 'Mobile Interscroller (Inpage)', value: 'inpage-mb', type: 'mobile' },
        { name: 'Mobile Interstitial (Firstview)', value: 'firstview-mb', type: 'mobile' },
        { name: 'Mobile Bottom Up', value: 'bottom-up-mb', type: 'mobile' },
        { name: 'Mobile 3D Footer', value: '3d-footer-mb', type: 'mobile' },
        { name: 'Mobile Footer', value: 'footer-mb', type: 'mobile' },
        { name: 'Mobile Footer Expandable', value: 'footer-expand-mb', type: 'mobile' },
        { name: 'Mobile Footer Wheel', value: 'wheel-mb', type: 'mobile' },
        { name: 'Mobile Footer Card', value: 'card-mb', type: 'mobile' },
        { name: 'Mobile Footer Teris', value: 'teris-mb', type: 'mobile' },
        { name: 'Mobile Footer Windmill', value: 'windmill-mb', type: 'mobile' },
        { name: 'Mobile In Image Native', value: 'in-native-mb', type: 'mobile' },
        { name: 'Mobile In Image Takeover', value: 'in-takeover-mb', type: 'mobile' },
        { name: 'Mobile In Image Carousel', value: 'in-carousel-mb', type: 'mobile' },
        { name: 'Mobile In Image With Inread Video', value: 'in-inread-mb', type: 'mobile' },
        { name: 'Mobile On Image', value: 'on-image-mb', type: 'mobile' },
        { name: 'Mobile 3D Post Carousel', value: '3d-post-carousel-mb', type: 'mobile' },
        { name: 'Mobile Medium Rectangle (300x250)', value: 'medium-rectangle-mb', type: 'mobile' },
        { name: 'Mobile Half Page (300x600)', value: 'half-page-mb', type: 'mobile' },
        //Video Adformats
        { name: 'Video Outstream (Inread)', value: 'outstream', type: 'video' },
        { name: 'Video Instream (Preroll)', value: 'instream', type: 'video' },
    ],
}