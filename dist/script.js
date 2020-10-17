function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  frameRate(4)
}

const colors = [
  {
    r: 246,
    g: 189,
    b: 96
  },
  {
    r: 132,
    g: 107,
    b: 138
  },
  {
    r: 247,
    g: 237,
    b: 226
  },
  {
    r: 245,
    g: 202,
    b: 195
  },
  {
    r: 132,
    g: 165,
    b: 157
  },
  {
    r: 207,
    g: 165,
    b: 180
  },
  {
    r: 247,
    g: 212,
    b: 188
  }
]

function draw() {
  const shapes = [ellipse, rect]
  
  for (let y = 0; y < windowHeight; y += 85) {
    for (let x = 0; x < windowWidth; x += 85) {
      let color = colors[Math.round(random(colors.length - 1))]
      let toFill = random(1)
      let shape = shapes[Math.round(random(1))]
      
      if (toFill >= 0.4) {
        fill(color.r, color.g, color.b)
        noStroke()
      } else {
        stroke(color.r, color.g, color.b)
        strokeWeight(3)
        noFill()
      }
      
      shape(x, y, 90, 90)
    }
  }
}