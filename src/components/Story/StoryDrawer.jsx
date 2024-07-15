import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const StoryDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid bg-neutral-950">
      <button
        onClick={() => setOpen(true)}
        className="rounded font-semibold bg-white px-4 py-2 text-black transition-colors "
      >
        Full Story
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            IRADA- What's Our Story?
          </h2>
          <p>
            The idea for the inception of the Youth Action and Leadership Forum
            for Environment can be attributed to Achintya, a passionate young
            advocate for environmental concerns.
            <br />
            <br />
            The journey began with attending an international conference on
            "Emissions monitoring", driven by genuine curiosity and a desire for
            knowledge. Engaging with a diverse group of individuals, Achintya
            actively participated in the two-day training workshop, forging
            valuable connections and expanding his network in the process.
            <br />
            Subsequently, Achintya expanded his involvement by participating in
            multiple conferences addressing critical issues such as climate
            change, clean energy transition and circular economy, among others.
            These engagements allowed him to amass knowledge, engage with
            various stakeholders, and gain hands-on learning experiences.
            Throughout this transformative process, he consistently observed a
            common yet distinctive insight— the paramount importance of youth
            involvement.
            <br />
            <br />
            Realising the significant disparity between the discussions and
            statements made in these forums and the actual implementation of
            effective measures on the ground, the idea of this youth driven
            Youth Action and Leadership Forum for Environment was born which
            underscored the urgent need for dedicated platforms that would
            facilitate serious youth-led deliberations, foster meaningful
            discussions, and provide forums for impactful dialogue within the
            environmental domain.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default StoryDrawer;
