import React from "react";
import Navigation from "@/components/prestige/Navigation";
import Footer from "@/components/prestige/Footer";

function Heading({ children }) {
  return (
    <h3 className="mt-10 font-display text-xl font-medium text-foreground md:text-2xl">
      {children}
    </h3>
  );
}

function Para({ children }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export default function Legal() {
  return (
    <div className="relative bg-background">
      <Navigation />

      <section id="privacy" className="relative bg-background pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-luxe text-accent">
            Legal
          </span>
          <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: October 28, 2026
          </p>

          <Para>
            Prestige Estate Management (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
            privacy. This policy explains what information we collect through
            prestigeestatemanagement.com and our private client portal, how we
            use it, and the choices you have.
          </Para>

          <Heading>Google Sign-In</Heading>
          <Para>
            When you sign in to the client portal with Google, we receive
            only your name, email address, and profile photo from Google.
            We use this solely to verify your identity and give you access
            to your estate&apos;s portal account. We do not request access to
            your contacts, files, calendar, or any other part of your Google
            account.
          </Para>

          <Heading>How We Store Your Data</Heading>
          <Para>
            Client, estate, and portal data (service requests, reports,
            invoices, messages, and account information) is stored securely
            with Supabase, our database and authentication provider.
            Access to that data is restricted to your own account and, for
            clients, your assigned estate records; our team accesses it only
            as needed to deliver our services.
          </Para>

          <Heading>Analytics</Heading>
          <Para>
            We use Umami, a privacy-friendly analytics platform, to
            understand general traffic patterns on our public website.
            Umami does not use cookies, does not track you across other
            sites, and does not collect personally identifiable information
            &mdash; it reports only aggregate, anonymized usage data. The
            client portal, which is private and behind sign-in, is not
            tracked.
          </Para>

          <Heading>How We Use Your Information</Heading>
          <Para>
            We use the information described above to authenticate you and
            maintain your portal session, to provide and improve our estate
            management services, and to communicate with you about your
            property, service requests, reports, and invoices.
          </Para>

          <Heading>We Don&apos;t Sell or Share Your Data</Heading>
          <Para>
            We do not sell your personal data, and we do not share it with
            third parties for advertising or marketing purposes. Your
            information is only ever handled by the service providers that
            run our site and portal on our behalf &mdash; Google (sign-in),
            Supabase (data storage), Vercel (hosting), and Umami (analytics)
            &mdash; each bound by their own privacy and security
            commitments.
          </Para>

          <Heading>Your Rights</Heading>
          <Para>
            You can request access to, correction of, or deletion of your
            personal data at any time by emailing{" "}
            <a
              href="mailto:info@prestigeestatemanagement.com"
              className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
            >
              info@prestigeestatemanagement.com
            </a>
            . We will respond promptly and complete deletion requests unless
            we are required to retain certain records by law or by an active
            service agreement.
          </Para>

          <Heading>Changes to This Policy</Heading>
          <Para>
            We may update this policy from time to time. When we do, we will
            revise the date above, and continued use of the site or portal
            means you accept the updated policy.
          </Para>

          <Heading>Contact</Heading>
          <Para>
            Questions about this policy are always welcome.
            <br />
            Prestige Estate Management
            <br />
            <a
              href="mailto:info@prestigeestatemanagement.com"
              className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
            >
              info@prestigeestatemanagement.com
            </a>{" "}
            &middot; (406) 555-0100
          </Para>
        </div>
      </section>

      <section id="terms" className="relative border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-luxe text-accent">
            Legal
          </span>
          <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: October 28, 2026
          </p>

          <Para>
            Welcome to Prestige Estate Management. These Terms of Service
            govern your use of prestigeestatemanagement.com and our private
            client portal. By accessing the site or portal, you agree to
            these terms. If you do not agree, please do not use them.
          </Para>

          <Heading>Our Services</Heading>
          <Para>
            This website describes the estate and ranch stewardship
            services we provide. The services themselves, including scope,
            scheduling, fees, and responsibilities, are governed by the
            individual service agreement between Prestige Estate Management
            and each client. Where these terms and a service agreement
            differ, the service agreement prevails.
          </Para>

          <Heading>Client Portal Access</Heading>
          <Para>
            The client portal is reserved for our clients and their
            authorized representatives. You may sign in with Google or with
            the credentials we provide. You are responsible for keeping
            your login secure and for activity under your account. If you
            believe your account has been accessed without permission,
            contact us immediately. We may suspend or end portal access when
            a client relationship ends or if these terms are not followed.
          </Para>

          <Heading>Appropriate Use</Heading>
          <Para>
            We ask that you use the site and portal only for their intended
            purpose. You agree not to attempt to access accounts or
            information that are not yours, interfere with the site&apos;s
            operation or security, upload harmful code, or use the portal
            for any unlawful purpose.
          </Para>

          <Heading>Information You Share</Heading>
          <Para>
            Please keep the information you provide through the portal
            accurate and current, including property details, access
            instructions, and contacts. We treat everything you share with
            discretion and handle it as described in our Privacy Policy
            above.
          </Para>

          <Heading>Communications</Heading>
          <Para>
            By using the portal, you agree to receive service-related
            communications from us, such as updates on your property,
            scheduling notices, and account messages.
          </Para>

          <Heading>Ownership of Content</Heading>
          <Para>
            The design, text, photography, logos, and other content on this
            site belong to Prestige Estate Management or are used with
            permission. Please do not copy or reuse them without our
            written consent. Information and documents about your property
            remain yours.
          </Para>

          <Heading>Third-Party Services</Heading>
          <Para>
            The site and portal rely on trusted third parties, including
            Google for sign-in, Supabase for secure data storage, Vercel for
            hosting, and Umami for privacy-friendly analytics. Your use of
            those services is also subject to their own terms.
          </Para>

          <Heading>Availability</Heading>
          <Para>
            We work to keep the site and portal available and secure, but we
            cannot guarantee uninterrupted access. They may be unavailable
            at times for maintenance or reasons outside our control. The
            site and portal are provided &ldquo;as is,&rdquo; and general
            information on this site is not a substitute for advice specific
            to your property.
          </Para>

          <Heading>Limitation of Liability</Heading>
          <Para>
            To the fullest extent permitted by law, Prestige Estate
            Management is not liable for indirect, incidental, or
            consequential damages arising from your use of the website or
            portal. Liability related to our stewardship services is
            addressed in your service agreement.
          </Para>

          <Heading>Governing Law</Heading>
          <Para>
            These terms are governed by the laws of the State of Montana,
            United States of America. Any dispute relating to them will be
            resolved in the state or federal courts located in Montana.
          </Para>

          <Heading>Changes to These Terms</Heading>
          <Para>
            We may update these terms from time to time. When we do, we
            will revise the date above, and continued use of the site or
            portal means you accept the updated terms.
          </Para>

          <Heading>Contact</Heading>
          <Para>
            Questions about these terms are always welcome.
            <br />
            Prestige Estate Management
            <br />
            <a
              href="mailto:info@prestigeestatemanagement.com"
              className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
            >
              info@prestigeestatemanagement.com
            </a>{" "}
            &middot; (406) 555-0100
          </Para>
        </div>
      </section>

      <Footer />
    </div>
  );
}
