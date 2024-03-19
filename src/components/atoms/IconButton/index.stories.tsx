import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from "@material-tailwind/react/components/IconButton/index";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'components/atoms/IconButton',
	component: IconButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		label: 'IconButtonDefaultStyles',
	},
};

export const Custom: Story = {
	args: {
		label: 'IconButtonCustomStyles',
	},

	render: function Render(args) {
		return (
			<div className="flex gap-4">
				<IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
					<i className="fab fa-google text-lg" />
				</IconButton>
				<IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
					<i className="fab fa-twitter text-lg" />
				</IconButton>
				<IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
					<i className="fab fa-dribbble text-lg" />
				</IconButton>
				<IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
					<i className="fab fa-github text-lg" />
				</IconButton>
			</div>
		)

	}
};
