import * as emotion from '@emotion/core'
import { createSerializer } from 'jest-emotion'

/*
  Emotion Snapshot Testing

  By diffing the serialized value of your React tree
  Jest can show you what changed in your app and allow
  you to fix it or update the snapshot.

  By default snapshots with emotion show generated
  class names. Adding jest-emotion allows you to output
  the actual styles being applied.

  https://emotion.sh/docs/testing
*/
expect.addSnapshotSerializer(createSerializer(emotion))