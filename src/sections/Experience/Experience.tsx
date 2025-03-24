import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

import styles from "./Experience.module.css";
import { EXPERIENCES } from "./experience-items";
import { Text } from "@/components";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <Text as="h2" className={styles.title}>
            Professional Experience
          </Text>
          <Text size="sm" as="p" className={styles.subtitle}>
            My journey through the tech industry
          </Text>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((experience, index) => (
            <div
              key={`${experience.company}-${index}`}
              className={`${styles.timelineItem} ${
                isVisible ? styles.visible : styles.hidden
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                <div className={styles.header}>
                  {experience.logo ? (
                    <div className={styles.logoWrapper}>
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className={styles.logo}
                      />
                    </div>
                  ) : (
                    <div className={styles.placeholderIcon}>
                      <Briefcase className={styles.icon} />
                    </div>
                  )}
                  <div>
                    <Text
                      as="h3"
                      size="sm"
                      weight="medium"
                      className={styles.jobTitle}
                    >
                      {experience.title}
                      {experience.current && (
                        <Text as="span" className={styles.currentBadge}>
                          Current
                        </Text>
                      )}
                    </Text>
                    <Text size="xs" as="p" className={styles.company}>
                      {experience.company}
                    </Text>
                  </div>
                </div>
                <p className={styles.description}>
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
