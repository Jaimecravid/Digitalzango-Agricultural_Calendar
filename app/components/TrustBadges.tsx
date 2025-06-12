"use client";
import React from "react";
import Image from "next/image";

function TrustBadges() {
  const badges = [
    { id: 1, label: "Verified Affiliate", img: "/images/trust.jpg" },
    { id: 2, label: "Secure Site", img: "/images/vecteezy.png" },
    { id: 3, label: "Trusted by Farmers", img: "/images/green-badge.jpg" },
  ];

  return (
    <section className="py-8 bg-green-100">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-around items-center gap-6">
        {badges.map((badge) => (
          <div key={badge.id} className="flex flex-col items-center">
            <div className="mb-2">
              <Image
                src={badge.img}
                alt={badge.label}
                width={70}
                height={70}
                className="rounded-full border-2 border-green-300 shadow"
              />
            </div>
            <div className="text-green-800 font-semibold text-sm text-center">{badge.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBadges;