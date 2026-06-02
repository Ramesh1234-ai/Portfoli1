import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { DARK, LIGHT } from "./Theme";

export function Experience({ theme: t = DARK } = {}) {
  const EXPERIENCES = [
    {
      id: "01",
      title: "Lead Software Engineer",
      company: "NetPieDev",
      type: "full-time",
      period: "2025 - present",
      description: [
        "Led product strategy and roadmap for NetPieDev Software Solutions",
        "Collaborated with engineering and design teams to deliver product features",
      ],
    },
    {
      id: "02",
      title: "Open Source Contributor",
      company: "Various Projects",
      type: "open source",
      period: "2023 - present",
      description: [
        "Built and maintained personal OSS tools used by the community",
        "Contributed patches and features to upstream Linux tooling projects",
      ],
    },
    {
      id: "03",
      title: "Freelance Developer",
      company: "Self-employed",
      type: "freelance",
      period: "2023 - present",
      description: [
        "Delivered full-stack web apps and backend services for clients",
        "Worked across cloud infra setup, CI/CD pipelines, and API design",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "80px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 400,
              color: t.text,
              letterSpacing: "-0.02em",
              margin: "0 0 60px 0",
              textAlign: "center",
            }}
          >
            <em style={{ color: t.accent, fontStyle: "italic" }}>
              Experience
            </em>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  display: "flex",
                  gap: 32,
                  paddingBottom: 32,
                  borderBottom: `1px solid ${t.border}`,
                }}
              >
                {/* ID */}
                <div
                  style={{
                    minWidth: 50,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: t.accent,
                    letterSpacing: "0.1em",
                    opacity: 0.6,
                  }}
                >
                  {exp.id}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      flexWrap: "wrap",
                      gap: 16,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: t.text,
                          margin: "0 0 4px 0",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: t.muted,
                          margin: 0,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {exp.company}{" "}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: t.accent,
                        whiteSpace: "nowrap",
                        opacity: 0.7,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul
                    style={{
                      margin: "16px 0 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "14px",
                          color: t.muted,
                          margin: 0,
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: t.accent,
                          }}
                        >
                          •
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
