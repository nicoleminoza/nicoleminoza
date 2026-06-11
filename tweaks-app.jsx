// tweaks-app.jsx — Tweaks panel for Nicole Miñoza's executive brand page.
// Drives static-HTML theming via CSS variables + a data-tone attribute.
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tone": "editorial",
  "brand": "#6b2c41",
  "accent": "#c07a44",
  "display": "Newsreader",
  "portrait": "A",
  "metricsDark": true
}/*EDITMODE-END*/;

const BRANDS = [
  { v: "#6b2c41", a: "#c07a44", name: "Plum" },
  { v: "#9d2235", a: "#c07a44", name: "Crimson" },
  { v: "#2f4a3a", a: "#c07a44", name: "Forest" },
  { v: "#2b2724", a: "#c07a44", name: "Ink" },
];

const DISPLAYS = ["Newsreader", "Hanken Grotesk"];

const PORTRAITS = {
  A: "assets/nicole-portrait.jpg",
  B: "assets/nicole-portrait-2.jpg",
  C: "assets/nicole-portrait-3.jpg",
};

// Per-photo crop: object-position + zoom, tuned to each shot's framing.
const CROPS = {
  A: { pos: "50% 18%", scale: 1 },
  B: { pos: "50% 22%", scale: 1.2 },
  C: { pos: "50% 12%", scale: 1.04 },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--brand", t.brand);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty(
      "--display",
      t.display === "Hanken Grotesk"
        ? '"Hanken Grotesk",-apple-system,sans-serif'
        : '"Newsreader",Georgia,serif'
    );
    document.body.setAttribute("data-tone", t.tone);
    const img = document.getElementById("portrait");
    if (img) {
      img.src = PORTRAITS[t.portrait] || PORTRAITS.A;
      const c = CROPS[t.portrait] || CROPS.A;
      img.style.objectPosition = c.pos;
      img.style.transformOrigin = "50% 22%";
      img.style.transform = `scale(${c.scale})`;
    }
  }, [t.brand, t.accent, t.display, t.tone, t.portrait]);

  const curBrand = BRANDS.find((b) => b.v === t.brand)?.name || "Custom";

  return (
    <TweaksPanel>
      <TweakSection label="Tone" />
      <TweakRadio
        label="Voice"
        value={t.tone}
        options={["editorial", "punchy", "warm"]}
        onChange={(v) => setTweak("tone", v)}
      />
      <TweakSection label="Brand color" />
      <TweakColor
        label={curBrand}
        value={t.brand}
        options={BRANDS.map((b) => b.v)}
        onChange={(v) => {
          const b = BRANDS.find((x) => x.v === v);
          setTweak({ brand: v, accent: b ? b.a : t.accent });
        }}
      />
      <TweakSection label="Display type" />
      <TweakRadio
        label="Headlines"
        value={t.display}
        options={DISPLAYS}
        onChange={(v) => setTweak("display", v)}
      />
      <TweakSection label="Portrait" />
      <TweakRadio
        label="Photo"
        value={t.portrait}
        options={["A", "B", "C"]}
        onChange={(v) => setTweak("portrait", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweak-root")).render(<App />);
