// Versão em inglês dos casos do Instagram (mesmas fotos de CASES_PT; os quadros do story são montados a partir destes textos)
export const EN = {
  DfFxcWmGxHH: { label: "Restore Lift", title: "Contours restored, the same person", procs: ["Restore Lift", "Deep Plane"],
    short: "The goal of facial surgery is not to change the face, but to restore the contours that time has softened. Notice the jawline and the neck contour.",
    long: ["From the front, at three quarters or in profile, she is still recognized as the same person. To me, that is what natural means."] },
  DcCMnx2AfIu: { label: "1 year after", title: "One year later, precise contours", procs: ["Restore Lift", "Deep Plane", "1 year after"],
    short: "One year after surgery shows how the result has matured: a well defined jawline and a continuous transition between face and neck.",
    long: ["After one year, the scars are extremely discreet, practically imperceptible, and the patient keeps her features, her volumes and her expression."] },
  DZqUIHxgRDN: { label: "1 year · profile", title: "Rejuvenation that fits her identity", procs: ["Restore Lift", "Deep Plane", "1 year after"],
    short: "At one year, recovery has gone through all of its most important phases. What stands out is how the rejuvenation became part of the patient's identity.",
    long: ["What remains is not the look of a procedure, but the impression of someone more rested and younger. A real result, no filters."] },
  DZFfMhvkZ1A: { label: "9 months", title: "Defined jaw, elegant neck", procs: ["Restore Lift", "Deep Plane", "9 months after"],
    short: "As the residual swelling fades and the tissues settle, the definition of the facial contour shows itself even more naturally.",
    long: ["A more defined jaw, a more elegant neck and visibly firmer, brighter skin."] },
  DZLqZhekWCl: { label: "Men · 9 months", title: "A doctor, with no obvious signs of surgery", procs: ["Restore Lift", "Deep Plane", "9 months after"],
    short: "A doctor with an intense routine and constant public exposure, this patient wanted a rejuvenation that preserved his identity, with no obvious signs of surgery.",
    long: ["At 9 months: a more defined facial contour, a better jawline and neck, and a firmer, more harmonious appearance."] },
  Deh_hcLH8wo: { label: "Men · 6 months", title: "Masculine features preserved", procs: ["Restore Lift", "Deep Plane", "6 months after"],
    short: "A male case at 6 months after surgery: evolving contours, a more defined face and, above all, preserved masculine features.",
    long: ["The goal is not to change the patient's expression or identity, but to restore what time has changed, precisely and without excess."] },
  DZYVCU3Ae5b: { label: "Men · neck", title: "The neck that gave his age away", procs: ["Restore Lift", "Deep Plane", "2 months after"],
    short: "Many men believe the problem is the face, but most of the time it is the neck that gives the age away.",
    long: ["At only 2 months there is already a clear improvement in the contour, the jaw and the transition between face and neck, without that “had surgery” look."] },
  DbLmdBGkfcs: { label: "6 months · jaw", title: "The jawline back", procs: ["Restore Lift", "Deep Plane", "6 months after"],
    short: "This patient's main concern was losing the definition of her jaw, which made the lower third of the face look heavier.",
    long: ["Six months later, the smaller double chin brought back the separation between face and neck, with a more elegant profile, without “stretching” the skin."] },
  DaEe7XbEanR: { label: "6 months · neck", title: "The result at six months", procs: ["Restore Lift", "Deep Plane", "6 months after"],
    short: "Around six months most of the swelling is gone and the result is perceived much more spontaneously.",
    long: ["The jawline is well defined again and the neck has a cleaner transition, preserving the patient's expressions and identity."] },
  DbGpOtMCW3t: { label: "2 months", title: "Facial architecture restored", procs: ["Restore Lift", "Deep Plane", "2 months after"],
    short: "Every face ages differently and needs an individual strategy. Here, the loss of support blurred the definition between jaw, cheek and neck.",
    long: ["At two months the jawline looks continuous, and the rejuvenation comes from reorganizing volumes, not from thinning the face."] },
  DavwhK3gXCb: { label: "2 months · round face", title: "Younger without a thinner face", procs: ["Restore Lift", "Deep Plane", "2 months after"],
    short: "Not every face needs to be thinner to look younger. In this patient, with a naturally round face, the goal was to restore contours, not to change the shape.",
    long: ["At two months the separation between jaw and neck is sharper and the cheek volumes are back in a higher, more harmonious position."] },
  DY4yg7vERcy: { label: "3 months", title: "Redefined contour and firmer skin", procs: ["Restore Lift", "Deep Plane", "3 months after"],
    short: "Before and after at 3 months after Restore Lift surgery.",
    long: ["A redefined contour, a clean jawline and a visible improvement in skin quality: firmer and brighter. A real result, no filters."] },
};

// Aplica o inglês a um caso do Instagram e remonta os quadros do story
export function toEnglish(c) {
  const e = EN[c.id];
  if (!e) return c;
  const n = c.photos.length;
  const story = c.photos.map(([t, src], k) => [
    t, src,
    k === 0 ? e.title : k === n - 1 ? "Natural, <em>that is it</em>." : "Another <em>angle</em>.",
    k === 0 ? e.short : k === n - 1 ? e.long[0] : `Restore Lift, Dr. Thomas's Deep Plane Facelift${e.procs[2] ? `, ${e.procs[2]}` : ""}.`,
  ]);
  return { ...c, ...e, story };
}
