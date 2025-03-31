import { getServiceById } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Webdoc from '@/components/docs/Webdoc';



export async function generateMetadata({ params }) {
    const { service } = await params; // Await params
    const serviceData = getServiceById(service);

    if (!serviceData) {
        return {
            title: 'Service Not Found',
            description: 'The requested service does not exist',
        };
    }

    return {
        title: `${serviceData.title} | My Freelance Services`,
        description: serviceData.description,
        keywords: serviceData.features?.join(', ') || '',
    };
}

export default async function ServiceDetail({ params }) {
    const { service } = await params; // Await params
    const serviceData = getServiceById(service);

    if (!serviceData) {
        return notFound();
    }

    return (
        <section className="min-h-screen py-12 px-6 md:px-0 font-jetbrains">
            <div className="container mx-auto">
                {/* bakck */}
                <div className="mb-8">
                    <Link
                        href="/services"
                        className="text-white/70 hover:text-white transition-colors underline"
                    >
                        ← Back to services
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">{serviceData.title}</h1>
                    <p className="md:text-xl text-white/80 mt-4 max-w-3xl">{serviceData.description}</p>
                </div>

                {/* Contenido detallado */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Características principales */}
                    <div className="border-b border-gray-800 pb-6">
                        <h2 className="text-2xl font-bold text-white mb-6">What I Offer</h2>
                        <ul className="space-y-4">
                            {serviceData.features?.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-purple-400 mr-3">✓</span>
                                    <span className="text-white/90">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* examples o technologies */}
                    <div className="cursor-default select-none">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            {serviceData.technologies ? 'Tech Stack' : 'Examples'} <small>{serviceData.icon}</small>
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {(serviceData.technologies || serviceData.examples || serviceData.deliverables || []).map(
                                (item, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/10 text-white rounded-full border border-white/20"
                                    >
                                        {item}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-2 border-white/20 pt-4 mb-20">
                    <h3 className="text-2xl font-bold text-white mb-6">Ready to start your project?</h3>
                    <a 
                        href="mailto:omargpax.dev@gmail.com"
                        className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 text-gray-900 rounded-lg font-bold transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
                {/* Instructions */}
                {serviceData.id==='web-development' && (<Webdoc/>)}
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    const { services } = await import('@/data/services');

    return services.map((service) => ({
        service: service.id,
    }));
}