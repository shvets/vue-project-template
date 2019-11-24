import { shallowMount } from '@vue/test-utils';
import FontsDemo from '@/components/FontsDemo.vue';

describe('FontsDemo.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(FontsDemo, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
