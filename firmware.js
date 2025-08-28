document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('fw-form');
  const fileInput = document.getElementById('fw-file');
  const status = document.getElementById('fw-status');
  const progressBar = document.getElementById('fw-progress-bar');
  const progress = document.getElementById('fw-progress');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) {
      status.textContent = 'Please select a firmware file.';
      return;
    }
    status.textContent = 'Uploading...';
    progressBar.style.display = 'block';
    progress.style.width = '0%';

    // Simulate upload and upgrade progress
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 18) + 7;
      if (percent > 100) percent = 100;
      progress.style.width = percent + '%';
      status.textContent = 'Upgrading... ' + percent + '%';
      if (percent === 100) {
        clearInterval(interval);
        status.textContent = 'Firmware upgrade successful!';
        setTimeout(() => {
          progressBar.style.display = 'none';
          progress.style.width = '0%';
        }, 1200);
      }
    }, 400);
  });
});
