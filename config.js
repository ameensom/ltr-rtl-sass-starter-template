module.exports = {
  languages: [{
      taskName: 'sass_ar',
      languageCode: 'ar',
      outputfolder: 'ar',
      languageName: 'Arabic'
    },
    {
      taskName: 'sass_en',
      languageCode: 'en',
      outputfolder: 'en',
      languageName: 'English'
    }
  ],
  defaultLanguageFolder: 'ar',
  headers: '@if($language != \'ar\') {\r\n    ' +
    '$direction: \'left\';\r\n   ' +
    '$reverse_direction: \'right\';\r\n    ' +
    '$font_face: \'font name\';\r\n   ' +
    '$font_face_bold: \'font name bold\';\r\n   ' +
    '$font_face_other: \'font name ar\';\r\n}\r\n@else {\r\n   ' +
    '$direction: \'right\';\r\n   ' +
    '$reverse_direction: \'left\';\r\n   ' +
    '$font_face: \'font name ar\';\r\n    ' +
    '$font_face_bold: \'font name ar bold\';\r\n    ' +
    '$font_face_other: \'font name\';\r\n};'
};
