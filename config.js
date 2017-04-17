module.exports = {
  languages: [{
      taskName: 'sass_ar',
      languageCode: 'ar',
      outputfolder: 'rtl',
      languageName: 'Arabic'
    },
    {
      taskName: 'sass_en',
      languageCode: 'en',
      outputfolder: 'ltr',
      languageName: 'English'
    }
  ],
  autoPrefixerOptions: {
    browsers: ['last 7 versions'],
    cascade: false
  },
  autoPrefixer: true,
  minifyCSS: false
};
