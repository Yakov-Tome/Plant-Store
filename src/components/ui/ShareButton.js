"use client";

import React from "react";
import { FiShare2, FiLink } from "react-icons/fi";

export default function ShareButton({
  title = "מוצר מהמשתלה",
  text = "",
  url,
  className = "btn btn-outline",
}) {
  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: text || title,
          url: shareUrl,
        });
        return;
      } catch (err) {}
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      window.prompt("העתק את הקישור:", shareUrl);
    }
  };

  return (
    <button type="button" onClick={handleShare} className={className}>
      {copied ? (
        <>
          <FiLink />
          הועתק!
        </>
      ) : (
        <>
          <FiShare2 />
          שתף
        </>
      )}
    </button>
  );
}
