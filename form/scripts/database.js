const list = {
    devices : [
        { name: 'Display', value: 'display' },
        { name: 'Mobile', value: 'mobile' },
        { name: 'Video', value: 'video' },
    ],
    templates : [
        //Display Templates
        { name: 'Dân Trí', value: 'dantri-pc', type: 'display' },
        { name: 'Phụ Nữ Today', value: 'phunutoday-pc', type: 'display' },
        { name: 'Thể Thao 247', value: 'thethao247-pc', type: 'display' },
        { name: 'Phụ Nữ Online', value: 'phunuonline-pc', type: 'display' },
        { name: 'Default', value: 'index-pc', type: 'display' },
        //Mobile Templates
        { name: 'Dân Trí', value: 'dantri-mb', type: 'mobile' },
        { name: 'Phụ Nữ Today', value: 'phunutoday-mb', type: 'mobile' },
        { name: 'Thể Thao 247', value: 'thethao247-mb', type: 'mobile' },
        { name: 'Phụ Nữ Online', value: 'phunuonline-mb', type: 'mobile' },
        { name: 'Default', value: 'index-mb', type: 'mobile' },
        //Video Templates
        { name: 'Default', value: 'index-vd', type: 'video' },
        { name: 'Bóng Đá 24h', value: 'bongda24h-vd', type: 'video' },
        { name: 'Tiin', value: 'tiin-vd', type: 'video' },
    ],
    adformats : [
        //Display Adformats
        { name: 'Display Balloon', value: 'balloon', type: 'display' },
        { name: 'Display Masthead (Billboard)', value: 'billboard', type: 'display' },
        { name: 'Display Bottom Up', value: 'bottom-up', type: 'display' },
        { name: 'Display In Image', value: 'in-native', type: 'display' },
        { name: 'Display In Image Takeover', value: 'in-takeover', type: 'display' },
        { name: 'Display In Image Carousel', value: 'in-carousel', type: 'display' },
        { name: 'Display In Image With Inread Video', value: 'in-inread', type: 'display' },
        { name: 'Display On Image', value: 'on-image-pc', type: 'display' },
        { name: 'Display 3D Post Carousel', value: '3d-post-carousel', type: 'display' },
        { name: 'Display IAB Medium Rectangle (300x250)', value: 'iab-medium-rectangle', type: 'display' },
        { name: 'Display IAB Half Page (300x600)', value: 'iab-half-page', type: 'display' },
        //Mobile Adformats
        { name: 'Mobile Masthead', value: 'masthead-mb', type: 'mobile' },
        { name: 'Mobile Interscroller (Inpage)', value: 'inpage', type: 'mobile' },
        { name: 'Mobile Interstitial (Firstview)', value: 'firstview', type: 'mobile' },
        { name: 'Mobile Footer', value: 'footer', type: 'mobile' },
        { name: 'Mobile In Image', value: 'in-native', type: 'mobile' },
        { name: 'Mobile In Image Takeover', value: 'in-takeover', type: 'mobile' },
        { name: 'Mobile In Image Carousel', value: 'in-carousel', type: 'mobile' },
        { name: 'Mobile In Image With Inread Video', value: 'in-inread', type: 'mobile' },
        { name: 'Mobile On Image', value: 'on-image-mb', type: 'mobile' },
        { name: 'Mobile 3D Post Carousel', value: '3d-post-carousel', type: 'mobile' },
        { name: 'Mobile IAB Medium Rectangle (300x250)', value: 'iab-medium-rectangle', type: 'mobile' },
        { name: 'Mobile IAB Half Page (300x600)', value: 'iab-half-page', type: 'mobile' },
        //Video Adformats
        { name: 'Video Outstream (Inread)', value: 'outstream', type: 'video' },
        { name: 'Video Instream (Preroll)', value: 'instream', type: 'video' },
    ],
}