"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientNewsWrapperProps {
    children: ReactNode;
}

function ClientNewsWrapper({ children }: ClientNewsWrapperProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full relative overflow-hidden bg-[#1B4D2E] min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center"
            id="media"
        >
            {/* Subtle overlay to distinguish slightly from testimonials if needed, but keeping base color same for consistency */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {children}
        </motion.section>
    );
}

export default ClientNewsWrapper;
