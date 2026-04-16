import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
            import { action } from '@storybook/addon-actions';
            
            import { AppButtonComponent } from './app-button.component';
            
            const meta: Meta<AppButtonComponent> = {
                title: 'Components/Button',
                component: AppButtonComponent,
                tags: ['autodocs'],
            
                decorators: [
                applicationConfig({
                providers: [],
                }),
                ],
            
                argTypes: {
                variant: {
                control: 'select',
                options: ['primary', 'secondary', 'danger', 'outline'],
                },
                size: {
                control: 'select',
                options: ['small', 'medium', 'large'],
                },
                radius: {
                control: 'select',
                options: ['none', 'sm', 'md', 'lg', 'full'],
                },
                leftIcon: { control: 'text' },
                rightIcon: { control: 'text' },
                spinner: { control: 'boolean' },
                disabled: { control: 'boolean' },
                role: { control: 'text' },
                ariaLabel: { control: 'text' },
                buttonClick: { table: { disable: true } },
                },
                };
            
                export default meta;
                type Story = StoryObj<AppButtonComponent>;
            
            
                    export const PrimaryLargeWithIcon: Story = {
                    render: () => ({
                    props: {
                    onClick: action('clicked'),
                    },
                    template: `
                    <app-button variant="primary" size="large" radius="full" leftIcon="cart" (buttonClick)="onClick($event)">
                        Add to Cart
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const LoadingPrimaryDisabled: Story = {
                    render: () => ({
                    props: {
                    loading: true,
                    },
                    template: `
                    <app-button variant="primary" size="large" [spinner]="loading" [disabled]="loading">
                        Processing Payment
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const AsyncWithIcon: Story = {
                    render: () => ({
                    props: {
                    loading: false,
                    handleClick(this: any) {
                    this.loading = true;
                    setTimeout(() => (this.loading = false), 2000);
                    },
                    },
                    template: `
                    <app-button variant="secondary" leftIcon="refresh" [spinner]="loading" (buttonClick)="handleClick()">
                        {{ loading ? 'Refreshing...' : 'Refresh Data' }}
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const ToggleWithIconVariant: Story = {
                    render: () => ({
                    props: {
                    active: false,
                    toggle(this: any) {
                    this.active = !this.active;
                    },
                    },
                    template: `
                    <app-button size="medium" radius="full" leftIcon="heart" [variant]="active ? 'primary' : 'outline'"
                        (buttonClick)="toggle()">
                        {{ active ? 'Liked' : 'Like' }}
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const DangerWithIconLarge: Story = {
                    render: () => ({
                    props: {
                    onDelete: action('delete'),
                    },
                    template: `
                    <app-button variant="danger" size="large" leftIcon="trash" (buttonClick)="onDelete($event)">
                        Delete Item
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const SubmitWithSpinnerAndRole: Story = {
                    render: () => ({
                    props: {
                    submitting: false,
                    submit(this: any) {
                    this.submitting = true;
                    setTimeout(() => (this.submitting = false), 1500);
                    },
                    },
                    template: `
                    <form (ngSubmit)="submit()">
                        <app-button variant="primary" size="large" radius="md" role="submit" [spinner]="submitting">
                            {{ submitting ? 'Submitting...' : 'Submit Form' }}
                        </app-button>
                    </form>
                    `,
                    }),
                    };
            
            
                    export const DisabledOutlineWithIcon: Story = {
                    render: () => ({
                    template: `
                    <app-button variant="outline" leftIcon="lock-closed" [disabled]="true">
                        Restricted Access
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const NavigationWithIcons: Story = {
                    render: () => ({
                    props: {
                    onClick: action('navigate'),
                    },
                    template: `
                    <app-button variant="primary" size="medium" leftIcon="home" rightIcon="chevron-forward"
                        (buttonClick)="onClick($event)">
                        Go to Dashboard
                    </app-button>
                    `,
                    }),
                    };
            
            
                    export const EventWithAllProps: Story = {
                    render: () => ({
                    props: {
                    onClick: action('buttonClick event'),
                    },
                    template: `
                    <app-button variant="secondary" size="large" radius="lg" leftIcon="flash" rightIcon="arrow-forward"
                        ariaLabel="Perform action" (buttonClick)="onClick($event)">
                        Trigger Action
                    </app-button>
                    `,
                    }),
};