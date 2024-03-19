import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'components/molcules/DefaultCard',
	component: Card,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


const content = {
	href: 'https://www.youtube.com/watch?v=SYK5Vh24vwU',
	img: 'https://i.ytimg.com/vi/SYK5Vh24vwU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ2rd-MVTQ9htTId0V91_BanJAGQ',
	title: '大谷翔平ドキュメント映画『Shohei Ohtani - Beyond the Dream』｜予告編｜松井秀喜/ダルビッシュ有/栗山監督も出演｜Disney+ (ディズニープラス）',
	channelName: 'ディズニープラス',
	views: '34万 回視聴',
	postedTimeAgo: '1 日前',
	time: '1:27'
}
//   time 5172


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		label: 'Card',
		content: content
	},
};


export const Primary: Story = {
	args: {
		label: 'Card',
		content: content
	},
};

Primary.decorators = [
	(Story) => (
		<div className="pt-2" >
			<p>abc</p>
			{Story()}
		</div>
	),
]