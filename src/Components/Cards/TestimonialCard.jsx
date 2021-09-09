const TestimonialCard = (props) => {
    return (
        <div className="bg-white rounded-xl w-3/4 px-12 py-12 shadow-lg">
            <p className="text-dark-blue">
                " The quick, brown fox jumps over a lazy dog.
                DJs flock by when MTV ax quiz prog.
                Junk MTV quiz graced by fox whelps.
                Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
                for quick jigs vex! Fox nymphs grab quick-jived waltz.
                Brick quiz whangs jumpy veldt fox. "
            </p>
            <div className="pt-8 flex items-center">
                <div className="bg-pink w-12 h-12 rounded-full"></div>
                <span className="pl-6">
                    <p className="font-bold text-dark-blue">Business name</p>
                    <p className="text-dark-blue">Business owner</p>
                </span>
            </div>
        </div>
    );
};

export default TestimonialCard;