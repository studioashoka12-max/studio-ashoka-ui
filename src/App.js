import { logo, hero, bedroom, kitchen, landscapeLawn, landscapePlan, landscapeView, landscapePath, drawing, cafe, floralCafe, livingOne, livingTwo, livingRoom } from "./assets/optimized/images";
import "./App.css";

const services = [
  {
    id: "interior-design",
    title: "Interior design",
    image: bedroom,
    alt: "Warm neutral bedroom with sculptural pendant lights and a curved upholstered headboard",
    work: [
      "Residential interiors",
      "Commercial spaces",
      "Offices",
      "Retail spaces",
      "Cafés & studios",
      "Hospitality spaces",
    ],
    includes: [
      "Space planning",
      "Concept development",
      "Interior styling",
      "3D visualization",
      "Material & finish selection",
      "Furniture planning",
      "Detailed working drawings",
    ],
  },
  {
    id: "landscape-design",
    title: "Landscape design",
    image: landscapeLawn,
    alt: "Sweeping garden lawn bordered by curved stepping-stone paths, flowering plants and trees",
    work: [
      "Residential gardens",
      "Society landscapes",
      "Clubhouse landscapes",
      "Resort landscapes",
      "Courtyards",
      "Entrance landscapes",
      "Recreational spaces",
    ],
    includes: [
      "Concept planning",
      "Landscape master plans",
      "Planting plans",
      "Hardscape planning",
      "3D visualization",
      "3D walkthroughs",
      "Outdoor furniture planning",
      "Detailed drawings",
    ],
  },
  {
    id: "visualization",
    title: "3D visualization",
    image: kitchen,
    alt: "Kitchen visualization with dusty rose cabinetry, pale stone counters and warm wooden shelving",
    work: [
      "Interior renders",
      "Exterior renders",
      "Landscape renders",
      "Walkthroughs",
      "Concept visualization",
    ],
  },
  {
    id: "working-drawings",
    title: "Working drawings",
    image: drawing,
    alt: "Detailed residential presentation plan showing room and furniture layouts",
    work: [
      "Furniture layouts",
      "Flooring layouts",
      "Ceiling plans",
      "Electrical layouts",
      "Elevations",
      "Sections",
      "Landscape layouts",
      "Planting plans",
      "Detail drawings",
    ],
  },
];
const projects = [
  {
    image: cafe,
    alt: "Black and white sketch-inspired café interior",
    caption:
      "Sketch-inspired café designed in black and white, with hand-drawn details carried across the walls and furniture.",
  },
  {
    image: floralCafe,
    alt: "Pink café seating alcove framed with flowers",
    caption:
      "A statement floral dome that adds colour, charm, and a sense of occasion.",
  },
  {
    image: landscapePlan,
    alt: "Aerial view of a farmhouse landscape",
    caption:
      "A relaxed farmhouse landscape shaped by gentle curves, winding pathways, and warm bollard lighting.",
  },
  {
    image: landscapeView,
    alt: "Garden pergola surrounded by flowering trees and stepping stones",
    caption:
      "Lush lawns flow into dense layers of flowering plants, creating an immersive setting that feels natural and inviting.",
  },
  {
    image: livingOne,
    alt: "Living room with botanical wall art and a suspended wooden swing",
    caption:
      "A thoughtfully layered living space, with botanical details, soft neutrals, and a traditional wooden swing.",
  },
  {
    image: livingTwo,
    alt: "Living room with illuminated stone feature wall and a timber shrine",
    caption:
      "Warm wood and an illuminated stone feature bring texture, balance, and a quiet elegance to the living room.",
  },
];
const testimonials = [
  {
    name: "Sumit Khamkar",
    text: "Really impressed with the work by Studio Ashoka. I’m currently getting my home interiors done by them, and the overall experience has been excellent so far. Their attention to detail, design understanding, and willingness to incorporate ideas while keeping everything practical really stands out. The team is professional, responsive, and genuinely focused on getting the details right. Looking forward to seeing the final outcome of my home.",
  },
  {
    name: "Rajani Raskar",
    text: "We absolutely loved how our studio turned out. The design is minimal, elegant, and beautifully reflects the aesthetic we had envisioned for The Nail & Dhaga. Every detail feels thoughtfully planned, from the colour palette to the overall layout and finishing.",
  },
  {
    name: "Arjun Dolse",
    text: "We had a great experience working with Studio Ashoka. They took the time to understand what we wanted and came up with designs that were both beautiful and practical. The entire process was smooth, and we are really happy with how the space turned out.",
  },
];

function ResponsiveImage({ image, alt, sizes = "(max-width: 767px) 86vw, 43vw", loading = "lazy", ...props }) {
  return <img src={image.src} srcSet={image.srcSet} sizes={sizes} alt={alt}
    width={image.width} height={image.height} loading={loading} decoding="async" {...props} />;
}

function ServiceList({ title, items }) {
  return (
    <div className="service-list">
      <p className="service-label">
        <span>{title}</span>
      </p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function ContactIcon({ type }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {type === "instagram" && (
        <>
          <rect x="4" y="4" width="24" height="24" rx="7" />
          <circle cx="16" cy="16" r="6" />
          <circle cx="23" cy="9" r="1" fill="currentColor" />
        </>
      )}
      {type === "facebook" && (
        <>
          <circle cx="16" cy="16" r="14" fill="currentColor" stroke="none" />
          <path
            d="M18 29V18h4l.6-5H18v-2c0-1.5.5-2 2-2h2.5V4.5H19c-4 0-6 2.5-6 6V13h-3v5h3v11"
            fill="var(--taupe)"
            stroke="none"
          />
        </>
      )}
      {type === "email" && (
        <>
          <circle cx="16" cy="16" r="14" fill="currentColor" stroke="none" />
          <rect
            x="7"
            y="10"
            width="18"
            height="13"
            rx="1"
            stroke="var(--taupe)"
          />
          <path d="m7 10 9 7 9-7" stroke="var(--taupe)" />
        </>
      )}
      {type === "whatsapp" && (
        <>
          <path
            d="M28 15.5A12 12 0 0 1 10.2 26L3 28l2-7A12 12 0 1 1 28 15.5Z"
            strokeLinejoin="round"
          />
          <path
            d="M11 8.5c-.5 0-1 .2-1.4.7-.5.6-1.2 1.5-1.2 3.1s1.2 3.2 1.4 3.5c.2.2 2.4 3.8 6 5.2 3 1.2 3.6 1 4.3.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.9-.5l-2.5-1.2c-.4-.2-.7-.2-1 .2l-1.1 1.3c-.2.3-.5.3-.9.1-1.2-.5-2.2-1.1-3-2-.7-.7-1.2-1.5-1.4-1.9-.2-.3 0-.5.2-.7l.7-.8.4-.7c.1-.2 0-.5-.1-.7l-1.2-2.8c-.3-.7-.6-.6-1-.6Z"
            fill="currentColor"
            stroke="none"
          />
        </>
      )}
    </svg>
  );
}
const enquiryWhatsApp = `https://wa.me/919834191441?text=${encodeURIComponent([
  'Hello Studio Ashoka! I would like to enquire about your design services.',
  '',
  'Name: ',
  'Service required: ',
  'Project location: ',
  'Project details: ',
  '',
  'Please let me know how we can discuss my project. Thank you!',
].join('\n'))}`;

const enquiryEmail = `mailto:studioashoka12@gmail.com?subject=${encodeURIComponent('Project Enquiry — Studio Ashoka')}&body=${encodeURIComponent([
  'Hello Studio Ashoka,',
  '',
  'I would like to enquire about your design services for my project.',
  '',
  'Name: ',
  'Phone number: ',
  'Service required: ',
  'Project location: ',
  'Approximate area: ',
  'Budget: ',
  'Expected timeline: ',
  '',
  'Project details: ',
  '',
  'Please let me know the next steps to discuss my requirements.',
  '',
  'Thank you!',
].join('\r\n'))}`;

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className="hero"

      >
        <ResponsiveImage image={hero} alt="" className="section-backdrop" sizes="(max-width: 767px) 1400px, 100vw" loading="eager" fetchPriority="high" />
        <nav
          className="hero-nav d-flex justify-content-between"
          aria-label="Services"
        >
          <a href="#interior-design">Interior design</a>
          <a href="#landscape-design">Landscape design</a>
          <a href="#visualization">3D visualization</a>
        </nav>
        <div className="brand d-flex align-items-center">
          <ResponsiveImage image={logo} alt="Studio Ashoka emblem" className="brand-logo" sizes="(max-width: 767px) 100px, 23vw" loading="eager" />
          <h1>
            <span>Studio</span>
            <span>Ashoka</span>
          </h1>
        </div>
      </header>
      <main id="main">
        <section className="about" aria-labelledby="about-title">
          <div className="about-heading">
            <h2 id="about-title">
              Design that
              <br />
              inspires,
              <br />
              spaces that
              <br />
              speak
            </h2>
          </div>
          <div className="about-copy container-fluid">
            <div className="row g-0">
              <div className="col-md-6 about-description">
                <p>
                  Studio Ashoka is an independent design studio working across
                  interior design, landscape design and architectural
                  visualization.
                  <br />
                  Our approach is simple:
                  <br />
                  Understand. Imagine. Draw. Visualize. Refine.
                  <br />
                  We begin with the character of a space, its purpose and the
                  people who will use it. From there, every decision has a
                  reason, whether it's the placement of a wall, the selection of
                  a plant, the proportion of a piece of furniture or the way
                  light falls across a surface.
                </p>
              </div>
              <div className="col-md-6 about-principles d-flex flex-column justify-content-around text-start text-md-center">
                <p>
                  We don't believe every project needs to look like
                  <br className="d-none d-lg-block" /> the last one.
                </p>
                <p>
                  The goal is to create something that feels right
                  <br className="d-none d-lg-block" /> for the space.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="services" aria-labelledby="services-title">
          {services.map((service, index) => (
            <article
              className={`service-section ${
                index === 0 ? "first-service" : ""
              }`}
              id={service.id}
              key={service.id}
            >
              {index === 0 && (
                <h3 id="services-title" className="section-title">
                  What we do
                </h3>
              )}
              <h3>{service.title}</h3>
              <div className="service-content">
                <ResponsiveImage
                  image={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="service-image"
                />
                <div
                  className={`service-details ${
                    !service.includes ? "single-list" : ""
                  }`}
                >
                  <ServiceList title="We work on" items={service.work} />
                  {service.includes && (
                    <ServiceList
                      title="Our services include"
                      items={service.includes}
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
        <section
          className="projects"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div
            className="projects-banner d-flex flex-column align-items-center justify-content-center text-center"

          >
            <ResponsiveImage image={landscapePath} alt="" className="section-backdrop" sizes="100vw" />
            <h2 id="projects-title">Projects</h2>
            <p>Ideas, drawn into existence</p>
          </div>
          <div className="projects-intro d-flex align-items-center justify-content-center text-center">
            <p>
              Working across interiors, landscapes and visualization
              <br className="d-none d-md-block" /> allows us to look at a
              project as a complete environment
              <br className="d-none d-md-block" /> rather than isolated pieces.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <figure key={project.image.src}>
                <ResponsiveImage image={project.image} alt={project.alt} />
                <figcaption>{project.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="testimonials" aria-labelledby="testimonials-title">
          <h3 id="testimonials-title">
            What our
            <br />
            clients say
          </h3>
          <div className="row testimonial-row">
            {testimonials.map((quote, index) => (
              <div className="col-md-4" key={quote.name}>
                <figure
                  className={`testimonial ${index === 0 ? "long-quote" : ""}`}
                >
                  <blockquote>{quote.text}</blockquote>
                  <figcaption>— {quote.name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer id="contact" className="contact">
        <div className="contact-image">
          <ResponsiveImage image={livingRoom} alt="Contemporary living room designed by Studio Ashoka" className="section-backdrop" sizes="100vw" />
        </div>
        <h2 className="text-center">Find us on</h2>
        <address className="contact-links">
          <a
            href="https://www.instagram.com/studio_ashoka_/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon type="instagram" />
            <span>studio_ashoka_</span>
          </a>
          <a
            href="https://www.facebook.com/studio_ashoka_/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon type="facebook" />
            <span>studio_ashoka_</span>
          </a>
          <a href={enquiryEmail}>
            <ContactIcon type="email" />
            <span>studioashoka12@gmail.com</span>
          </a>
          <a href={enquiryWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp: 9834191441 (opens in a new tab)">
            <ContactIcon type="whatsapp" />
            <span>9834191441</span>
          </a>
        </address>
      </footer>
    </>
  );
}
export default App;
