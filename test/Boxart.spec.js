import Vue from 'vue';
import BoxArt from '../src/components/BoxArt.vue'

describe("BoxArt component", () => {

  let data;

  beforeEach(() => {
    data = BoxArt.data();
  });

  afterEach(() => {

  });

  it('game data should be null', () => {
    expect(data.game).toBe(null)
  })
});
