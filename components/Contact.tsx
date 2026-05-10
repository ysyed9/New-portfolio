"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">$ ./contact.exe</h2>
        <p className="font-mono text-xs mb-8" style={{ color: "var(--text-muted)" }}>
          // Open to new opportunities, collaborations, and conversations
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact info card */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <div
              className="rounded-lg overflow-hidden font-mono text-sm"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}
            >
              {/* JSON header */}
              <div
                className="px-4 py-2.5 flex items-center gap-2 text-xs"
                style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                <span style={{ color: "var(--green)" }}>▶</span> contact_info.json
              </div>

              <div className="p-4 leading-7">
                <div style={{ color: "var(--text-secondary)" }}>{"{"}</div>
                <div className="pl-4">
                  <div>
                    <span style={{ color: "var(--cyan)" }}>&quot;status&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>: </span>
                    <span style={{ color: "var(--green)" }}>&quot;available&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>&quot;email&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>: </span>
                    <a
                      href="mailto:younussyed787070@gmail.com"
                      style={{ color: "var(--yellow)" }}
                      className="hover:underline"
                    >
                      &quot;younussyed787070@gmail.com&quot;
                    </a>
                    <span style={{ color: "var(--text-secondary)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>&quot;phone&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>: </span>
                    <span style={{ color: "var(--yellow)" }}>&quot;(956)-578-1070&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>&quot;socials&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>: {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <div>
                      <span style={{ color: "var(--cyan)" }}>&quot;github&quot;</span>
                      <span style={{ color: "var(--text-secondary)" }}>: </span>
                      <a
                        href="https://github.com/younussyed987"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--green)" }}
                        className="hover:underline"
                      >
                        &quot;@younussyed987&quot;
                      </a>
                      <span style={{ color: "var(--text-secondary)" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "var(--cyan)" }}>&quot;linkedin&quot;</span>
                      <span style={{ color: "var(--text-secondary)" }}>: </span>
                      <a
                        href="https://linkedin.com/in/younussyed"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--green)" }}
                        className="hover:underline"
                      >
                        &quot;linkedin.com/in/younussyed&quot;
                      </a>
                    </div>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-secondary)" }}>{"}"}</span>
                    <span style={{ color: "var(--text-secondary)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>&quot;location&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>: </span>
                    <span style={{ color: "var(--yellow)" }}>&quot;Dallas, TX&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>&quot;response&quot;</span>
                    <span style={{ color: "var(--text-secondary)" }}>: </span>
                    <span style={{ color: "var(--yellow)" }}>&quot;within 24h&quot;</span>
                  </div>
                </div>
                <div style={{ color: "var(--text-secondary)" }}>{"}"}</div>
              </div>

              {/* Status footer */}
              <div
                className="px-4 py-2.5 font-mono text-xs flex items-center gap-2"
                style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--green)", boxShadow: "0 0 6px var(--green)" }}
                />
                Waiting for connection...<span className="cursor-blink">_</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}
            >
              {/* Form header */}
              <div
                className="px-4 py-2.5 flex items-center justify-between text-xs font-mono"
                style={{ background: "#0d0d14", borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: "var(--cyan)" }}>TS</span>
                  <span>sendMessage.ts</span>
                </div>
                <div className="flex gap-4" style={{ color: "var(--text-muted)" }}>
                  <span>mail.compose</span>
                  <span style={{ color: "var(--green)" }}>secure channel</span>
                </div>
              </div>

              {sent ? (
                <div className="p-8 text-center font-mono">
                  <div className="text-3xl mb-3">✓</div>
                  <div className="text-base font-bold mb-2" style={{ color: "var(--green)" }}>
                    Message sent!
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    I&apos;ll get back to you within 24 hours.
                  </div>
                  <button
                    className="mt-4 font-mono text-xs px-4 py-2 rounded border"
                    style={{ color: "var(--text-muted)", borderColor: "var(--border-bright)" }}
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs block mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full font-mono text-sm px-3 py-2 rounded outline-none transition-all duration-200"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border-bright)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border-bright)")}
                        placeholder="Younus Syed"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs block mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full font-mono text-sm px-3 py-2 rounded outline-none transition-all duration-200"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border-bright)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border-bright)")}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full font-mono text-sm px-3 py-2 rounded outline-none transition-all duration-200"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border-bright)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-bright)")}
                      placeholder="Let's build something"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full font-mono text-sm px-3 py-2 rounded outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border-bright)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-bright)")}
                      placeholder="Hey Younus, I'd love to chat about..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="font-mono text-sm font-bold py-2.5 rounded transition-all duration-200"
                    style={{
                      background: sending ? "rgba(0,255,136,0.5)" : "var(--green)",
                      color: "#0a0a0f",
                      cursor: sending ? "wait" : "pointer",
                    }}
                  >
                    {sending ? "Sending..." : "Send Message →"}
                  </button>
                  <p className="font-mono text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    // Protected by spam filters and rate limits
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
