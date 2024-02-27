import { AnimatePresence } from "framer-motion";
import { useState } from "react";


const Index = () => {
    const [loading, setLoading] = useState(true)
    return (
        <section>
            <div>
                <AnimatePresence>
                    {
                        loading == true ?
                        <>
                        </>
                        :
                        "No animation"
                    }

                </AnimatePresence>
            </div>
        </section>
    );
};

export default Index;