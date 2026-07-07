import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <section className="pt-40 pb-24">
        <div className="container text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">404</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mb-6">
            Page Not Found
          </h1>
          <p className="text-slate-text text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
