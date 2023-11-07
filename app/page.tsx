import { ThemeToggler } from "@/components/theme-toggler"

export default function Home() {
  return (
    <main className="min-h-screen grid items-center justify-center">
      <article className="border p-4 prose relative dark:prose-invert">
        <header>
          <h1>JohnCode</h1>
        </header>

        <section>
          <h2>About Me</h2>
          <p>
            I&apos;m a software engineer with a passion for building things.
            I&apos;m currently working at{" "}
            <a
              href="https://www.etsy.com/"
              className="text-blue-500 hover:underline"
            >
              Etsy
            </a>{" "}
            on the Search team.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              This website! Built with{" "}
              <a
                href="https://nextjs.org/"
                className="text-blue-500 hover:underline"
              >
                Next.js
              </a>{" "}
              <a
                href="https://tailwindcss.com/"
                className="text-blue-500 hover:underline"
              >
                Tailwind CSS
              </a>{" "}
              .
            </li>
          </ul>
        </section>

        <section>
          <h2>Blog</h2>
          <p>
            I&apos;m currently working on a blog post about how I built this
            website. Check back soon!
          </p>
        </section>
        <div className="p-4 top-0 right-0 absolute">
          <ThemeToggler />
        </div>
      </article>
    </main>
  )
}
