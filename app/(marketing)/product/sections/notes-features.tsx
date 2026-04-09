import { Check, ClipboardList, ListChecks, Repeat, Timer } from 'lucide-react'
import { Container } from '@/components/container'
import { FeatureCard, FeatureCardContent } from '@/components/ui/feature-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Notes3Illustration from "@/components/illustrations/notes-3-illustration"

const subFeatures = [
    {
        icon: ListChecks,
        title: 'Smart Checklists',
        description: 'Create dynamic task lists that update progress automatically as items are completed.',
    },
    {
        icon: Timer,
        title: 'Due Date Tracking',
        description: 'Set deadlines and get timely reminders so nothing slips through the cracks.',
    },
    {
        icon: Repeat,
        title: 'Recurring Tasks',
        description: 'Automate repetitive workflows with tasks that reset on your schedule.',
    },
    {
        icon: ClipboardList,
        title: 'Activity Log',
        description: 'Keep a complete history of task changes and completions for full accountability.',
    },
]

export function NotesFeatures() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Quick Task Management</h2>
                    <p className="text-muted-foreground text-balance text-lg">Capture tasks on the fly and track progress effortlessly. Stay organized with lightweight notes and checklists built for speed.</p>
                </div>
            </Container>
            <Container asGrid>
                <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px">
                    <div
                        aria-hidden
                        className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                    <div className="@4xl:col-span-4">
                        <FeatureCard className="@4xl:col-span-2 col-span-full grid-rows-1">
                            <FeatureCardContent className="@4xl:pb-12 flex h-full flex-col space-y-6">
                                <div className="bg-card ring-foreground/3 flex size-12 rounded-full shadow-xl shadow-black/5 ring-1">
                                    <ClipboardList className="text-muted-foreground m-auto size-4" />
                                </div>
                                <h3 className="text-3xl font-semibold">Notes & Tasks</h3>
                                <p className="text-muted-foreground text-balance">Jot down quick tasks and check them off as you go — a simple, distraction-free way to stay on top of your daily workflow.</p>
                                <ul className="w-full space-y-2">
                                    {['Interactive Task Checklists', 'Real-Time Progress Tracking', 'Instant Status Updates'].map((feature, index) => (
                                        <li
                                            key={index}
                                            className="text-muted-foreground flex items-center gap-2">
                                            <Check className="size-4 text-emerald-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="mt-auto w-fit">
                                    <Link href="#">Learn more</Link>
                                </Button>
                            </FeatureCardContent>
                        </FeatureCard>
                    </div>
                    <div
                        data-grid-content
                        className="@4xl:col-span-4 @max-4xl:py-12 group flex items-center justify-center [--color-primary:var(--color-indigo-500)]">
                        <Notes3Illustration />
                    </div>
                    <div
                        aria-hidden
                        className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                </div>
            </Container>
            <Container
                asGrid
                className="@4xl:**:data-grid-content:p-8 **:data-grid-content:p-6 @5xl:**:data-grid-content:p-12 @4xl:grid-cols-10 grid-cols-2">
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:grid-cols-3 @sm:grid-cols-2 col-span-8 grid gap-px">
                    {subFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="@4xl:last:hidden">
                            <div
                                data-grid-content
                                className="space-y-3">
                                <feature.icon className="size-4" />
                                <h3 className="mt-3 font-medium">{feature.title}</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>
        </section>
    )
}