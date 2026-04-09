import { Container } from '@/components/container'
import { FeatureCard, FeatureCardDescription, FeatureCardCIllustration, FeatureCardContent, FeatureCardTitle } from '@/components/ui/feature-card'
import { CalendarIllustration } from '@/components/illustrations/calendar'
import { TaskPlanningIllustration } from '@/components/illustrations/task-planning-illustration'
import { MapIllustration } from '@/components/illustrations/map-illustration'

export default function HowItWorksSection() {
    return (
        <section className="[--color-primary:var(--color-indigo-500)]">
            <Container
                asGrid
                className="@2xl:grid-cols-5 @5xl:grid-cols-10 @5xl:grid">
                <div className="@max-2xl:hidden @max-5xl:row-start-2">
                    <div data-grid-content />
                </div>

                <div className="@5xl:col-span-4 col-span-full">
                    <div
                        data-grid-content
                        className="@2xl:p-12 p-6">
                        <div className="@5xl:sticky @5xl:top-32 @max-5xl:text-center @max-5xl:mx-auto @5xl:h-fit @5xl:max-w-xs max-w-xl text-balance">
                            <h2 className="text-foreground mb-6 text-4xl font-semibold">Set up your pipeline in minutes</h2>
                            <p className="text-muted-foreground text-lg">Get started in minutes. Set up your workspace and invite team members.</p>
                        </div>
                    </div>
                </div>

                <div className="@2xl:col-span-3 @5xl:col-span-4 grid gap-px">
                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">01.</span> Launch
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Get started in minutes.</span> Set up your workspace and invite team members.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration className="@4xl:px-10">
                            <CalendarIllustration />
                        </FeatureCardCIllustration>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">02.</span> Analyze
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Gain actionable insights.</span> Our AI-powered analytics engine processes your data.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration className="relative">
                            <div className="mask-radial-from-35% @4xl:-mx-32 relative w-full self-center">
                                <MapIllustration />
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">03.</span> Plan
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Execute with precision.</span> Transform insights into strategic action plans.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration className="items-start">
                            <TaskPlanningIllustration />
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>
                <div className="@max-2xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>
        </section>
    )
}