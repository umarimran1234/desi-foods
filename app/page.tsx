import { AddButton } from "@/components/Cart";
import { BookingForm, MenuTabs, Photo } from "@/components/ClientBits";
import { Icon } from "@/components/Icons";
import { formatPrice, gallery, platters, reviews, site, specials, unsplash, waLink } from "@/lib/data";

const orderLink = waLink("Assalam-o-Alaikum Desi Foods, I want to place an order.");
const ticker = ["Dumba Platter", "Dumba Derhya Pulao", "Dumba Karahi", "Batair Platter", "Dum Pukht", "BBQ Platter", "Beef Biryani", "Handi"];

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <span className="urdu">{site.urdu}</span>
            <h1>
              Asli Desi Zaiqa,
              <br />
              <span>Dumba</span> Ki Shaan.
            </h1>
            <p className="lead">
              From slow-cooked Dumba Derhya Pulao to sizzling karahi and full family platters — Desi Foods serves
              Karachi&apos;s most loved desi dishes, made fresh every day in FB Area.
            </p>
            <div className="hero-cta">
              <a href="#menu" className="btn btn-primary">View Menu</a>
              <a href={orderLink} target="_blank" rel="noopener" className="btn btn-wa">
                <Icon name="wa" /> Order on WhatsApp
              </a>
              <a href="#contact" className="btn btn-ghost">Book a Table</a>
            </div>
            <div className="hero-badges">
              <div><Icon name="fire" /> Fresh dumba daily</div>
              <div><Icon name="users" /> Platters for up to 12</div>
              <div><Icon name="bike" /> Home delivery</div>
            </div>
          </div>
          <div className="hero-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpg" alt={`Desi Foods — ${site.urdu}`} />
            <div className="tag">Opp. Lucky One Mall</div>
          </div>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>{i % 2 ? "✦" : "🔥"} {t}</span>
          ))}
        </div>
      </div>

      <section className="section" id="about">
        <div className="wrap about">
          <div className="about-img reveal">
            <Photo src={unsplash("photo-1585937421612-70a008356fbe", 900)} alt="Desi curry being served" label="Our Kitchen" />
            <Photo src={unsplash("photo-1601050690597-df0568f70950", 600)} alt="Fresh desi snacks" label="Fresh Naan" className="ph2" />
          </div>
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2>Ghar jaisa khana, dawat jaisi shaan.</h2>
            <p>
              Desi Foods started with one simple idea: serve the flavours Karachi grew up with — rich yakhni pulao,
              desi-ghee karahi and smoky BBQ — without shortcuts. Everything is cooked fresh in our own kitchen at
              Abdullah Centre, FB Area Block 16.
            </p>
            <p>
              We&apos;re best known for our <strong>dumba specialities</strong> — the first in the area to introduce a
              complete Dumba Platter, Dumba Derhya Pulao made in fresh dumba yakhni, and Dumba Chalkki. Whether it&apos;s
              a quick lunch, a family dinner or a dawat for twelve, we&apos;ve got a platter for it.
            </p>
            <div className="stats">
              <div className="stat"><b>100%</b><small>Fresh meat daily</small></div>
              <div className="stat"><b>12</b><small>Persons per mega platter</small></div>
              <div className="stat"><b>40+</b><small>Desi dishes</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="specials">
        <div className="wrap">
          <SectionHead eyebrow="Signature Dishes" title="Jis ke liye log door door se aate hain">
            Our house specials — cooked in desi ghee, served hot, and made for sharing.
          </SectionHead>
          <div className="grid-3">
            {specials.map((s) => (
              <article className="dish reveal" key={s.name}>
                <Photo src={s.img} alt={s.name} label={s.name}>
                  <span className="badge">{s.badge}</span>
                </Photo>
                <div className="dish-body">
                  <h3>{s.name}</h3>
                  <div className="ur">{s.urdu}</div>
                  <p>{s.desc}</p>
                  <div className="dish-foot">
                    <span className="price">{formatPrice(s.price)} <small>{s.unit}</small></span>
                    <AddButton name={s.name} price={s.price} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="wrap">
          <SectionHead eyebrow="Full Menu" title="Aaj kya khayenge?">
            Tap <b>+</b> to add items to your order, then send it straight to us on WhatsApp.
          </SectionHead>
          <MenuTabs />
          <p className="note">* Prices are indicative and may change. Please confirm on call/WhatsApp.</p>
        </div>
      </section>

      <section className="section deals" id="deals">
        <div className="wrap">
          <SectionHead eyebrow="Family & Dawat Platters" title="Sab mil ke khao, zyada maza aayega">
            Perfect for families, office lunches and dawats. Pre-order a day in advance for the big ones.
          </SectionHead>
          <div className="grid-3">
            {platters.map((p) => (
              <div className={`deal reveal${p.hot ? " hot" : ""}`} key={p.name}>
                {p.hot && <div className="ribbon">BESTSELLER</div>}
                <h3>{p.name}</h3>
                <div className="serves">{p.serves}</div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <div className="amt">{formatPrice(p.price)}</div>
                <AddButton name={p.name} price={p.price} className={p.hot ? "btn" : "btn btn-primary"}>
                  Add to Order
                </AddButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Gallery" title="Aankhon se bhi khaiye" />
          <div className="gallery reveal">
            {gallery.map((g) => (
              <Photo key={g.label} src={g.img} alt={g.label} label={g.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHead eyebrow="Why Desi Foods" title="Quality jo har niwala mein mehsoos ho" />
          <div className="why">
            <div className="reveal"><Icon name="fire" className="" /><h3>Fresh Daily</h3><p>Meat bought and cooked the same day — never frozen.</p></div>
            <div className="reveal"><Icon name="leaf" className="" /><h3>Desi Ghee</h3><p>Traditional recipes, pure desi ghee and hand-ground masalay.</p></div>
            <div className="reveal"><Icon name="users" className="" /><h3>Family Seating</h3><p>Clean, comfortable family hall — great for dawats and gatherings.</p></div>
            <div className="reveal"><Icon name="bike" className="" /><h3>Fast Delivery</h3><p>Hot food at your door across FB Area, Gulberg &amp; nearby.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="wrap">
          <SectionHead eyebrow="Guest Reviews" title="Hamare mehmaan kya kehte hain" />
          <div className="reviews">
            {reviews.map((r, i) => (
              <div className="review reveal" key={i}>
                <div className="stars">{"★".repeat(r.stars) + "☆".repeat(5 - r.stars)}</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">
                  <span>{r.initial}</span>
                  <div><b>Sample Guest</b><small>Google review · replace</small></div>
                </div>
              </div>
            ))}
          </div>
          <div className="review-cta">
            <a className="btn" href={site.mapsSearch} target="_blank" rel="noopener">
              <Icon name="star" /> Enjoyed your meal? Review us on Google
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="contact">
        <div className="wrap">
          <SectionHead eyebrow="Visit / Order" title="Aaiye, intezar hai" />
          <div className="contact">
            <div className="info reveal">
              <h3>
                Desi Foods <span className="urdu" style={{ fontSize: "1.3rem", color: "var(--orange-l)" }}>{site.urdu}</span>
              </h3>
              <div className="row">
                <Icon name="pin" className="" />
                <div>
                  <b>Address</b>
                  {site.street}, {site.area}
                  <br />
                  <small>{site.landmark}</small>
                </div>
              </div>
              <div className="row">
                <Icon name="phone" className="" />
                <div>
                  <b>Call / WhatsApp</b>
                  {site.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} style={{ display: "block" }}>{p.label}</a>
                  ))}
                </div>
              </div>
              <div className="row">
                <Icon name="clock" className="" />
                <div style={{ flex: 1 }}>
                  <b>Timings</b>
                  <table className="hours">
                    <tbody>
                      {site.hours.map(([d, h]) => (
                        <tr key={d}><td>{d}</td><td>{h}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <a href={orderLink} target="_blank" rel="noopener" className="btn btn-wa" style={{ marginTop: ".4rem" }}>
                <Icon name="wa" /> Chat on WhatsApp
              </a>
            </div>
            <div className="map reveal">
              <iframe title="Desi Foods location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={site.mapEmbed} />
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            <a href="#home" className="brand" style={{ marginBottom: ".8rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.jpg" alt="" />
              <span><b>Desi Foods</b><small>{site.urdu}</small></span>
            </a>
            <p>Karachi&apos;s home of dumba specialities, karahi, BBQ and family platters. Asli desi zaiqa — har roz, taaza.</p>
            <div className="social">
              <a href={site.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Icon name="fb" className="" /></a>
              <a href="#" aria-label="Instagram"><Icon name="ig" className="" /></a>
              <a href="#" aria-label="TikTok"><Icon name="tt" className="" /></a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#specials">Signature Dishes</a>
            <a href="#menu">Full Menu</a>
            <a href="#deals">Platters</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div>
            <h4>Contact</h4>
            {site.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>)}
            <a href="#contact">Abdullah Centre, FB Area Block 16, Karachi</a>
          </div>
        </div>
        <div className="wrap copy">© {new Date().getFullYear()} Desi Foods, Karachi. All rights reserved.</div>
      </footer>
    </>
  );
}
