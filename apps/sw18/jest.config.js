module.exports = {
  name: 'sw18',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw18',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
