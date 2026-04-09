import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LogoCloud } from '@/components/logo-cloud'
import { CallToAction } from '@/components/call-to-action'
import { Container, Separator } from '@/components/container'
import { ExpandableFeatures } from '@/app/(marketing)/product/sections/expandable-features'
import { NotesFeatures } from '@/app/(marketing)/product/sections/notes-features'
import HowItWorksSection from '@/app/(marketing)/product/sections/how-it-works'
import { TestimonialSection } from '@/app/(marketing)/product/sections/testimonial'
import { TestimonialsSection } from '@/app/(marketing)/product/sections/testimonials-section'
import { FeatureCard, FeatureCardDescription, FeatureCardCIllustration, FeatureCardContent, FeatureCardTitle } from '@/components/ui/feature-card'
import { AtSign, Brain } from 'lucide-react'
import AiAutocompleteIllustration from '@/components/illustrations/ai-autocomplete'
import { AiMentionsIllustration } from '@/components/illustrations/ai-mentions'
import { ProductIllustration } from '@/app/(marketing)/product/sections/product-illustration'

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="overflow-hidden">
                <div className="relative">
                    <Container className="@4xl:px-12 px-6 py-3 text-center">
                        <span className="text-muted-foreground font-mono text-sm uppercase">Invoicing</span>
                    </Container>
                    <Container asGrid>
                        <div className="grid grid-cols-10 gap-px bg-border">
                            <div
                                aria-hidden
                                className="max-sm:hidden">
                                <div data-grid-content />
                            </div>

                            <div className="col-span-full sm:col-span-8">
                                <div
                                    data-grid-content
                                    className="px-6 pb-16 pt-12 text-center">
                                    <div className="relative mx-auto max-w-3xl text-center">
                                        <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight lg:text-6xl">Invoicing. Enterprise Efficiency. Real Impact.</h1>
                                        <p className="text-muted-foreground mx-auto mb-8 mt-6 text-balance text-lg">Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease.</p>

                                        <Button
                                            asChild
                                            size="lg"
                                            className="text-sm shadow-xl shadow-indigo-900/40">
                                            <Link href="#">Start Testing for free</Link>
                                        </Button>
                                        <span className="text-muted-foreground mt-3 block text-center text-sm">No credit card required!</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                aria-hidden
                                className="max-sm:hidden">
                                <div data-grid-content />
                            </div>
                        </div>
                    </Container>
                    <div className="relative">
                        <div className="absolute inset-0 grid grid-rows-[auto_1fr]">
                            <Container
                                asGrid
                                decorators={6}>
                                <div
                                    aria-hidden
                                    className="col-span-full grid grid-cols-10 gap-px bg-border">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="odd:aspect-2/1 last:aspect-2/1 aspect-square last:col-span-2 odd:col-span-2">
                                            <div data-grid-content />
                                        </div>
                                    ))}
                                </div>
                                <div
                                    aria-hidden
                                    className="col-span-full grid grid-cols-10 gap-px bg-border">
                                    {Array.from({ length: 7 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="even:aspect-2/1 aspect-square odd:rounded odd:bg-indigo-200 even:col-span-2">
                                            <div data-grid-content />
                                        </div>
                                    ))}
                                </div>
                                <div
                                    aria-hidden
                                    className="col-span-full grid grid-cols-10 gap-px bg-border">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="odd:aspect-2/1 last:aspect-2/1 aspect-square last:col-span-2 odd:col-span-2">
                                            <div data-grid-content />
                                        </div>
                                    ))}
                                </div>
                            </Container>

                            <Container
                                aria-hidden
                                decorators={6}>
                                <></>
                            </Container>
                        </div>
                        <div className="-translate-y-6">
                            <ProductIllustration />
                        </div>
                    </div>
                </div>
                <LogoCloud />
            </section>
            <Separator className="h-24" />

            <Container
                asGrid
                className="relative">
                <h2 className="sr-only">Features</h2>
                <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px bg-border [--color-primary:var(--color-indigo-500)]">
                    <div className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                    <div className="@4xl:col-span-4">
                        <FeatureCard>
                            <FeatureCardContent>
                                <FeatureCardTitle>
                                    <Brain className="size-4" />
                                    AI Autocomplete
                                </FeatureCardTitle>
                                <FeatureCardDescription>
                                    <span className="text-foreground">Get intelligent suggestions as you type.</span> Context-aware completions that understand your intent.
                                </FeatureCardDescription>
                            </FeatureCardContent>
                            <FeatureCardCIllustration>
                                <AiAutocompleteIllustration />
                            </FeatureCardCIllustration>
                        </FeatureCard>
                    </div>
                    <div className="@4xl:col-span-4">
                        <FeatureCard>
                            <FeatureCardContent>
                                <FeatureCardTitle>
                                    <AtSign className="size-4" />
                                    Contextual Mentions
                                </FeatureCardTitle>
                                <FeatureCardDescription>
                                    <span className="text-foreground">Reference any file with a simple @mention.</span> Pull in context from all documents instantly.
                                </FeatureCardDescription>
                            </FeatureCardContent>
                            <FeatureCardCIllustration>
                                <AiMentionsIllustration />
                            </FeatureCardCIllustration>
                        </FeatureCard>
                    </div>
                    <div className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                </div>
            </Container>
            <Separator className="h-24" />

            <HowItWorksSection />
            <Separator className="h-24" />
            <TestimonialSection />
            <Separator className="h-24" />
            <ExpandableFeatures />
            <NotesFeatures />
            <TestimonialsSection />
            <CallToAction />
        </>
    )
}