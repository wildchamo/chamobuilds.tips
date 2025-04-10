<script>
    export let links = {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    };
  </script>
  
  <style>
    .social-icons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      padding: 1rem;
    }
  
    .icon {
      width: 32px;
      height: 32px;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
  
    .icon:hover {
      transform: scale(1.2);
      opacity: 0.8;
    }
  </style>
  
  <div class="social-icons">
    {#if links.facebook}
      <a href={links.facebook} target="_blank" rel="noopener">
        <img class="icon" src="https://icongr.am/fontawesome/facebook.svg?size=32&color=000000" alt="Facebook" />
      </a>
    {/if}
    {#if links.twitter}
      <a href={links.twitter} target="_blank" rel="noopener">
        <img class="icon" src="https://icongr.am/fontawesome/twitter.svg?size=32&color=000000" alt="Twitter" />
      </a>
    {/if}
    {#if links.instagram}
      <a href={links.instagram} target="_blank" rel="noopener">
        <img class="icon" src="https://icongr.am/fontawesome/instagram.svg?size=32&color=000000" alt="Instagram" />
      </a>
    {/if}
    {#if links.linkedin}
      <a href={links.linkedin} target="_blank" rel="noopener">
        <img class="icon" src="https://icongr.am/fontawesome/linkedin.svg?size=32&color=000000" alt="LinkedIn" />
      </a>
    {/if}
  </div>