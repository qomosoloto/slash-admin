import { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

// steps to test React components in storyBook
// 1. import the component
// 2. import Meta and StoryObj from @storybook/react
// 3. create a `Meta` object with the component, 可以配置文档
// 4. export the Meta object
// 5. create a `Story` type alias to `StoryObj` type
// 6. create several  stories of  `Story`  with different args
// 7. export the stories

const meta: Meta<typeof Form> = {
  title: 'Example/Form',
  component: Form,
  // 自动生成组件的文档,还可以在页面上直接修改Props值看效果。
  tags: ['autodocs'],
  parameters: {
    // 组件会在屏幕中间显示！！
    layout: 'centered',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  args: {},
};

export const InputedForm: Story = {
  args: {
    label: 'Story',
    placeholder: 'Enter your Story',
    name: 'Story',
  },
};
