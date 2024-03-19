import type { Meta, StoryObj } from '@storybook/react';
import { PokemonDataSwitchTabs } from './index';
import { ReduxProvider } from '../../../app/_redux/index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'components/molcules/PokemonDataSwitchTabs',
	component: PokemonDataSwitchTabs,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
} satisfies Meta<typeof PokemonDataSwitchTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }, { label: 'Third', value: 'third' }];


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Default: Story = {
// 	args: {
// 		label: 'Tabs',
// 		data,
// 	},
// };


export const Default: Story = {
	args: {
		label: 'Tabs',
		data,
	},
};

Default.decorators = [
	(Story) => (
		<ReduxProvider>
			{Story()}
		</ReduxProvider >
	),
]