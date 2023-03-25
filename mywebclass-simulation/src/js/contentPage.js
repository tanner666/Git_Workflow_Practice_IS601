function calculateReadingTime() {
    const titleSection = document.querySelector('#title');
    const textContent = titleSection.textContent.trim();
    const wordCount = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Assuming an average reading speed of 200 words per minute
    const readingTimeSpan = document.querySelector('#readingTime');
    readingTimeSpan.textContent = `${readingTime} min read`;
  }

window.addEventListener('load', calculateReadingTime);