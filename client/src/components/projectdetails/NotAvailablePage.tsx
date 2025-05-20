import { AlertTriangle } from "react-feather";
import BaseLink from "@/components/ui/BaseLink";

const NotAvailablePage = () => {
  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-white py-12 md:py-16">
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mx-auto max-w-md space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <AlertTriangle className="h-8 w-8 text-cyan-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Project Not Available
              </h1>
              <p className="text-lg text-gray-600">
                The project you're looking for is either no longer available or
                doesn't exist. Please check the URL or return to our projects
                page.
              </p>
              <div className="pt-6">
                <BaseLink
                  href="/projects"
                  className="inline-flex items-center rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  View All Projects
                </BaseLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotAvailablePage;
