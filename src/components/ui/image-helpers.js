export const IMAGE_LOAD_MODE = {
  OPTIMIZED: "optimized",
  ORIGINAL: "original",
  FALLBACK: "fallback",
}

export function splitImageProps(props) {
  const wrapperProps = {}
  const imageProps = {}
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("data-")) wrapperProps[key] = value
    else imageProps[key] = value
  }
  return { wrapperProps, imageProps }
}

export function getImagePreviewClassName(className, currentClassName, baselineClassName) {
  const sourceClasses = new Set((className || "").split(/\s+/))
  const baselineClasses = new Set(baselineClassName.split(/\s+/))
  return currentClassName.split(/\s+/).filter((token) =>
    !["inline-block", "relative"].includes(token) || !baselineClasses.has(token) || sourceClasses.has(token)
  ).join(" ")
}

export function parseWixMediaUrl(src) {
  return null
}

export function buildTransformUrl(parsed, options) {
  return ""
}

export function buildSrcSet(parsed, options) {
  return ""
}

export function getOriginalImageUrl(src, parsed) {
  return src
}

export function nextImageLoadMode(mode) {
  return IMAGE_LOAD_MODE.FALLBACK
}
