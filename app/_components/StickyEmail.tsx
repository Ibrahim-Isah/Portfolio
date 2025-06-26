import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block z-50">
            <a
                href={`mailto:${GENERAL_INFO.email}`}
                className="glass-card px-4 py-2 text-ash-300 tracking-[1px] transition-all duration-300 hover:text-white hover:glow-effect border border-white/10 rounded-r-lg"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>
        </div>
    );
};

export default StickyEmail;
