// Quiz Questions Database - all domains combined
const quizQuestions = [
    // Domain 1: Ocular Anatomy, Physiology, and Pathology
    {
        question: "Which layer of the cornea is responsible for most of the cornea's refractive power?",
        options: [
            "Epithelium",
            "Bowman's membrane",
            "Stroma",
            "Descemet's membrane"
        ],
        answer: 0,
        explanation: "The epithelium is the anterior (front) layer of the cornea and provides about two-thirds of the cornea's total refractive power. This is important for contact lens fitting as lenses rest on this layer, and any epithelial damage can affect vision and lens comfort."
    },
    {
        question: "What is the average horizontal visible iris diameter (HVID) in adults?",
        options: [
            "8.0 mm",
            "10.0 mm",
            "11.8 mm",
            "12.5 mm"
        ],
        answer: 2,
        explanation: "The average horizontal visible iris diameter (HVID) in adults is around 11.8 mm. This measurement is crucial for selecting the appropriate diameter for contact lenses, especially rigid gas permeable (RGP) lenses."
    },
    {
        question: "Which of the following is NOT a layer of the tear film?",
        options: [
            "Lipid layer",
            "Aqueous layer",
            "Mucin layer",
            "Protein layer"
        ],
        answer: 3,
        explanation: "The tear film consists of three layers: the lipid (oily) outer layer that prevents evaporation, the aqueous (watery) middle layer that hydrates the cornea, and the mucin inner layer that helps the tear film adhere to the corneal surface. There is no distinct protein layer in the tear film, although proteins are found within the aqueous layer."
    },
    {
        question: "Which ocular structure produces aqueous humor?",
        options: [
            "Iris",
            "Ciliary body",
            "Trabecular meshwork",
            "Lens"
        ],
        answer: 1,
        explanation: "The ciliary body produces aqueous humor, which maintains intraocular pressure and provides nutrients to the lens and cornea. Understanding aqueous humor production and drainage is important when considering patients with glaucoma for contact lens wear."
    },
    {
        question: "What is the normal corneal thickness at the center?",
        options: [
            "0.3 mm",
            "0.5 mm",
            "0.7 mm",
            "1.0 mm"
        ],
        answer: 1,
        explanation: "The normal corneal thickness at the center is approximately 0.5 mm (or 500 microns). Corneal thickness is an important measurement when evaluating patients for certain types of contact lenses, especially in patients with conditions like keratoconus."
    },
    {
        question: "Which condition is characterized by corneal thinning and steepening that results in an irregular, cone-shaped cornea?",
        options: [
            "Keratitis",
            "Keratoconus",
            "Corneal dystrophy",
            "Pinguecula"
        ],
        answer: 1,
        explanation: "Keratoconus is characterized by progressive corneal thinning and steepening, resulting in an irregular, cone-shaped cornea. This condition often requires specialty contact lenses like rigid gas permeable lenses, hybrid lenses, or scleral lenses for proper vision correction."
    },
    {
        question: "Which glands in the eyelids produce the oily component of tears?",
        options: [
            "Meibomian glands",
            "Lacrimal glands",
            "Goblet cells",
            "Glands of Zeis"
        ],
        answer: 0,
        explanation: "Meibomian glands are sebaceous glands located in the tarsal plates of the eyelids that produce the oily (lipid) component of tears. This oil helps prevent tear evaporation and is crucial for maintaining a stable tear film, which is essential for comfortable contact lens wear."
    },
    {
        question: "Which of the following is a sign of giant papillary conjunctivitis (GPC)?",
        options: [
            "Flat, clear cornea",
            "Large papillae under the upper eyelid",
            "Yellow discharge from the eye",
            "Reduced tear production"
        ],
        answer: 1,
        explanation: "Giant papillary conjunctivitis (GPC) is characterized by large papillae (bumps) under the upper eyelid. It's often associated with contact lens wear, especially soft lenses, and can cause symptoms like itching, mucous discharge, and reduced lens comfort."
    },
    
    // Domain 2: Refractive Errors
    {
        question: "What is the refractive error in which light focuses behind the retina called?",
        options: [
            "Myopia",
            "Hyperopia",
            "Astigmatism",
            "Presbyopia"
        ],
        answer: 1,
        explanation: "Hyperopia (farsightedness) occurs when light focuses behind the retina, causing difficulty with near vision. For contact lens correction, plus-powered lenses are used to bring the focal point forward onto the retina."
    },
    {
        question: "A contact lens prescription of -2.50D indicates which refractive error?",
        options: [
            "Moderate myopia",
            "Mild hyperopia",
            "Severe astigmatism",
            "Presbyopia"
        ],
        answer: 0,
        explanation: "A contact lens prescription of -2.50D indicates moderate myopia (nearsightedness). Minus-powered lenses are used to correct myopia by moving the focal point back onto the retina."
    },
    {
        question: "Which condition requires toric contact lenses for proper correction?",
        options: [
            "Simple myopia",
            "Simple hyperopia",
            "Astigmatism",
            "Presbyopia"
        ],
        answer: 2,
        explanation: "Astigmatism requires toric contact lenses for proper correction. Toric lenses have different powers in different meridians to correct the irregularly curved cornea characteristic of astigmatism."
    },
    {
        question: "What does the 'add' power in a multifocal contact lens prescription refer to?",
        options: [
            "The power needed to correct astigmatism",
            "The additional power needed for near vision",
            "The total spherical power of the lens",
            "The power needed to correct myopia"
        ],
        answer: 1,
        explanation: "The 'add' power in a multifocal contact lens prescription refers to the additional plus power needed for near vision. This is necessary for correcting presbyopia, the age-related loss of near focusing ability."
    },
    {
        question: "What is the vertex distance?",
        options: [
            "The distance between the pupil and the lens",
            "The distance between the back surface of a contact lens and the cornea",
            "The distance between the back surface of a spectacle lens and the front surface of the cornea",
            "The distance between the two eyes"
        ],
        answer: 2,
        explanation: "Vertex distance is the distance between the back surface of a spectacle lens and the front surface of the cornea (approximately 12-14mm). When converting spectacle prescriptions to contact lens prescriptions, vertex distance must be considered for powers stronger than ±4.00D."
    },
    {
        question: "Which term describes the condition where the corneal astigmatism and refractive astigmatism are different?",
        options: [
            "Residual astigmatism",
            "Regular astigmatism",
            "Lenticular astigmatism",
            "Oblique astigmatism"
        ],
        answer: 0,
        explanation: "Residual astigmatism refers to the condition where corneal astigmatism and refractive astigmatism are different. This occurs when some of the astigmatism originates from the crystalline lens rather than just the cornea, which affects contact lens fitting strategies."
    },
    {
        question: "What is the typical power change for every 1mm movement of a -3.00D contact lens?",
        options: [
            "0.15D",
            "0.25D",
            "0.50D",
            "0.75D"
        ],
        answer: 0,
        explanation: "The typical power change for every 1mm movement of a -3.00D contact lens is approximately 0.15D. This is why proper lens centration is important, especially with higher powers where small movements can cause more significant visual changes."
    },
    
    // Domain 3: Instrumentation for Measurement and Observation
    {
        question: "Which instrument is used to measure corneal curvature?",
        options: [
            "Slit lamp",
            "Keratometer",
            "Tonometer",
            "Ophthalmoscope"
        ],
        answer: 1,
        explanation: "A keratometer (also known as an ophthalmometer) is used to measure the curvature of the anterior corneal surface. These measurements are critical for determining the base curve of rigid contact lenses and for detecting and measuring corneal astigmatism."
    },
    {
        question: "What does a corneal topographer measure?",
        options: [
            "Corneal thickness",
            "Intraocular pressure",
            "Three-dimensional corneal shape",
            "Tear film stability"
        ],
        answer: 2,
        explanation: "A corneal topographer measures the three-dimensional shape of the cornea. It creates detailed maps showing corneal elevation, curvature, and power across the entire corneal surface, which is especially useful for fitting specialty contact lenses for irregular corneas."
    },
    {
        question: "What is the primary use of a slit lamp in contact lens practice?",
        options: [
            "To measure corneal curvature",
            "To determine the refractive error",
            "To examine the anterior segment of the eye",
            "To measure intraocular pressure"
        ],
        answer: 2,
        explanation: "The primary use of a slit lamp in contact lens practice is to examine the anterior segment of the eye. It allows for detailed examination of the cornea, conjunctiva, tear film, eyelids, and contact lens fit on the eye with high magnification."
    },
    {
        question: "What is the function of a lensometer (focimeter)?",
        options: [
            "To measure the base curve of a contact lens",
            "To measure the power and optical center of a lens",
            "To determine tear film quality",
            "To measure pupil size"
        ],
        answer: 1,
        explanation: "A lensometer (focimeter) is used to measure the power and optical center of a lens. In contact lens practice, it can be used to verify the power of soft contact lenses that have been removed from the eye and placed on a special contact lens holder."
    },
    {
        question: "Which test evaluates tear film stability?",
        options: [
            "Schirmer test",
            "Tear break-up time (TBUT)",
            "Fluorescein staining",
            "Phenol red thread test"
        ],
        answer: 1,
        explanation: "Tear break-up time (TBUT) evaluates tear film stability by measuring how long it takes for dry spots to appear in the tear film after a blink. This is important when evaluating patients for contact lenses, as poor tear stability can lead to discomfort and dryness with lens wear."
    },
    {
        question: "What is the purpose of using fluorescein dye with contact lens patients?",
        options: [
            "To measure intraocular pressure",
            "To evaluate the fit of rigid contact lenses",
            "To determine corneal thickness",
            "To measure pupil size"
        ],
        answer: 1,
        explanation: "Fluorescein dye is used to evaluate the fit of rigid contact lenses by visualizing the tear layer between the lens and cornea. It can also reveal corneal epithelial defects or abrasions, which might contraindicate contact lens wear until healed."
    },
    {
        question: "What does an optical coherence tomographer (OCT) measure in relation to contact lens fitting?",
        options: [
            "Corneal curvature only",
            "Tear film thickness only",
            "Cross-sectional images of anterior eye structures",
            "Pupil diameter in different lighting conditions"
        ],
        answer: 2,
        explanation: "An optical coherence tomographer (OCT) creates high-resolution cross-sectional images of anterior eye structures. For contact lens fitting, it can be used to evaluate lens clearance with scleral lenses, assess corneal thickness, and examine the tear lens between the contact lens and cornea."
    },
    
    // Domain 4: Prefitting
    {
        question: "What information should be gathered during the case history for a new contact lens patient?",
        options: [
            "Only previous contact lens experience",
            "Only ocular and medical history",
            "Only lifestyle and occupational needs",
            "All of the above"
        ],
        answer: 3,
        explanation: "A comprehensive case history for a new contact lens patient should include previous contact lens experience, ocular and medical history, medications, allergies, and lifestyle and occupational needs. This information helps determine the most appropriate lens type and wearing schedule."
    },
    {
        question: "Which of the following contraindications for contact lens wear is considered absolute?",
        options: [
            "Mild dry eye",
            "Active corneal infection",
            "Mild astigmatism",
            "Allergic conjunctivitis"
        ],
        answer: 1,
        explanation: "An active corneal infection is an absolute contraindication for contact lens wear. Wearing contact lenses during an active infection can exacerbate the condition and potentially lead to serious complications like corneal ulcers."
    },
    {
        question: "What is the primary purpose of assessing tear film quality before fitting contact lenses?",
        options: [
            "To determine lens power",
            "To evaluate potential comfort and lens wettability",
            "To measure corneal curvature",
            "To check for color vision deficiencies"
        ],
        answer: 1,
        explanation: "Assessing tear film quality before fitting contact lenses is primarily done to evaluate potential comfort and lens wettability. Poor tear quality or quantity can lead to discomfort, dryness, and deposits on the lens, affecting the success of contact lens wear."
    },
    {
        question: "Which measurement is most important when selecting the diameter of a rigid gas permeable (RGP) lens?",
        options: [
            "Horizontal visible iris diameter (HVID)",
            "Vertical palpebral aperture",
            "Pupil size",
            "Lens power"
        ],
        answer: 0,
        explanation: "The horizontal visible iris diameter (HVID) is most important when selecting the diameter of a rigid gas permeable (RGP) lens. Generally, RGP lenses are fit smaller than the HVID to allow for movement and tear exchange while maintaining centration."
    },
    {
        question: "What is the most appropriate initial base curve selection for a spherical soft contact lens?",
        options: [
            "0.5mm flatter than the flattest keratometry reading",
            "Equal to the average keratometry reading",
            "0.5mm steeper than the steepest keratometry reading",
            "Based on the manufacturer's fitting guide for the specific lens"
        ],
        answer: 3,
        explanation: "The most appropriate initial base curve selection for a spherical soft contact lens should be based on the manufacturer's fitting guide for the specific lens. Different lens materials and designs have different optimal fitting relationships to the cornea."
    },
    {
        question: "Which of the following would indicate a patient might benefit from daily disposable contact lenses?",
        options: [
            "History of poor compliance with lens care",
            "Desire for occasional wear only",
            "Mild allergies or seasonal allergies",
            "All of the above"
        ],
        answer: 3,
        explanation: "All of these factors would indicate a patient might benefit from daily disposable contact lenses. Daily disposables eliminate the need for lens care solutions (addressing compliance issues), are convenient for occasional wear, and provide a fresh lens daily (beneficial for patients with allergies)."
    },
    {
        question: "What is the typical amount of oxygen transmission needed to avoid corneal edema during daily wear?",
        options: [
            "At least 24 Dk/t",
            "At least 35 Dk/t",
            "At least 87 Dk/t",
            "At least 125 Dk/t"
        ],
        answer: 0,
        explanation: "For daily wear contact lenses, a minimum oxygen transmissibility (Dk/t) value of approximately 24 is typically needed to avoid corneal edema. For extended or overnight wear, much higher values (87 Dk/t or greater) are recommended to maintain corneal health."
    },
    
    // Domain 5: Diagnostic Fitting
    {
        question: "What does an 'alignment fit' of an RGP lens mean?",
        options: [
            "The lens base curve is steeper than the corneal curvature",
            "The lens base curve matches the corneal curvature",
            "The lens base curve is flatter than the corneal curvature",
            "The lens is positioning off-center"
        ],
        answer: 1,
        explanation: "An 'alignment fit' of an RGP lens means the lens base curve matches the corneal curvature. This typically produces even fluorescein pattern across the cornea, with the lens weight supported evenly across the corneal surface."
    },
    {
        question: "What fluorescein pattern indicates a steep-fitting RGP lens?",
        options: [
            "Central pooling with peripheral touch",
            "Central touch with peripheral pooling",
            "Even fluorescein distribution",
            "No fluorescein pattern visible"
        ],
        answer: 0,
        explanation: "A steep-fitting RGP lens (where the base curve is steeper than the cornea) creates a fluorescein pattern with central pooling (appears bright green) and peripheral touch or bearing (appears darker). This indicates inadequate central lens clearance."
    },
    {
        question: "What does 'apical clearance' refer to in RGP lens fitting?",
        options: [
            "The lens touches the corneal apex",
            "The lens clears the corneal apex",
            "The lens is centered on the pupil",
            "The lens moves excessively with each blink"
        ],
        answer: 1,
        explanation: "Apical clearance refers to when the RGP lens clears (doesn't touch) the corneal apex (the highest point of the cornea). This fitting approach is sometimes used for keratoconus patients to avoid mechanical pressure on the apex of the cone."
    },
    {
        question: "What is the ideal amount of movement for a well-fitted soft contact lens?",
        options: [
            "No movement",
            "0.5-1.0 mm with each blink",
            "2.0-3.0 mm with each blink",
            "Complete rotation with each blink"
        ],
        answer: 1,
        explanation: "A well-fitted soft contact lens should move approximately 0.5-1.0 mm with each blink. This amount of movement allows for proper tear exchange while maintaining comfort and stable vision. Insufficient movement can lead to corneal hypoxia, while excessive movement causes discomfort and fluctuating vision."
    },
    {
        question: "What is the primary consideration when fitting a toric soft contact lens?",
        options: [
            "Base curve only",
            "Lens diameter only",
            "Lens power only",
            "Rotational stability"
        ],
        answer: 3,
        explanation: "Rotational stability is the primary consideration when fitting toric soft contact lenses. Since toric lenses correct astigmatism, the lens must maintain proper orientation to align the cylindrical correction with the patient's astigmatic axis. Various stabilization methods (prism ballast, peri-ballast, dual thin zones) help achieve this stability."
    },
    {
        question: "What is a characteristic of a loose-fitting soft lens?",
        options: [
            "Excessive movement with blinking",
            "Edge standoff",
            "Conjunctival indentation",
            "Both A and B"
        ],
        answer: 3,
        explanation: "A loose-fitting soft lens exhibits both excessive movement with blinking and edge standoff (the edge of the lens lifts away from the eye). These signs indicate the lens is too flat or too large for the eye, which can cause discomfort, poor vision, and lens dislodgement."
    },
    {
        question: "What is the best way to evaluate the fit of a multifocal soft contact lens?",
        options: [
            "Assess lens movement only",
            "Check distance vision only",
            "Check near vision only",
            "Evaluate lens centration, movement, and visual performance at multiple distances"
        ],
        answer: 3,
        explanation: "The best way to evaluate the fit of a multifocal soft contact lens is to assess lens centration, movement, and visual performance at multiple distances. Proper centration is critical for simultaneous vision designs, as decentration can significantly affect the balance between distance and near vision."
    },
    {
        question: "If a soft contact lens has edge lift when observed on the cornea, how can this be corrected?",
        options: [
            "Steepen the base curve",
            "Decrease the diameter",
            "Flatten the base curve",
            "Change the edge design"
        ],
        answer: 0,
        explanation: "If a soft contact lens has edge lift (the edge is not conforming to the ocular surface), this can be corrected by steepening the base curve. A steeper base curve creates a tighter fit that allows the lens to better drape over the cornea and align with the sclera at the edges."
    },
    {
        question: "Which of the following could cause a rigid contact lens to displace frequently and pop out?",
        options: [
            "Steep base curve",
            "Insufficient peripheral curve",
            "Large diameter",
            "Flat base curve and excessive peripheral curve"
        ],
        answer: 3,
        explanation: "A flat base curve combined with excessive peripheral curve can cause a rigid contact lens to displace frequently and pop out. This combination creates a lens that does not conform well to the corneal shape and has inadequate lid attachment, making it unstable on the eye."
    },
    {
        question: "A patient with a high degree of with-the-rule astigmatism fitted with a spherical rigid lens will show touch:",
        options: [
            "On the horizontal meridian",
            "On the vertical meridian",
            "Equally across the cornea",
            "In the peripheral cornea only"
        ],
        answer: 0,
        explanation: "A patient with a high degree of with-the-rule astigmatism (steeper in the vertical meridian) fitted with a spherical rigid lens will show touch on the horizontal meridian. This is because the lens will align with or vault the steeper vertical meridian while touching or bearing on the flatter horizontal meridian."
    }
];

    
    // Domain 6: Dispensing
    {
        question: "What is the most appropriate instruction to give a new contact lens wearer about insertion and removal times?",
        options: [
            "Insert the lenses upon waking and remove them just before sleeping",
            "Insert the lenses after breakfast and remove them before dinner",
            "Gradually build up wearing time as recommended by the practitioner",
            "Wear the lenses only when necessary"
        ],
        answer: 2,
        explanation: "New contact lens wearers should gradually build up wearing time as recommended by the practitioner. This adaptation period allows the cornea to adjust to reduced oxygen availability and the eyelids to adapt to the presence of the lens. A typical schedule might start with 4 hours on day one and increase by 2 hours daily until reaching the prescribed wearing time."
    },
    {
        question: "Which statement about contact lens solution compatibility is correct?",
        options: [
            "All multipurpose solutions can be used with all types of contact lenses",
            "Hydrogen peroxide systems require a neutralization step before lens insertion",
            "Saline solution alone is sufficient for disinfecting lenses",
            "Rigid lens solutions can be used for soft lenses in emergencies"
        ],
        answer: 1,
        explanation: "Hydrogen peroxide systems require a neutralization step before lens insertion. Without neutralization, hydrogen peroxide (typically 3%) will cause severe burning and corneal damage. Neutralization occurs either by using a special case with a platinum disc or by adding a neutralizing tablet."
    },
    {
        question: "What is the appropriate way to store contact lenses when not being worn?",
        options: [
            "In tap water",
            "In saline solution",
            "In a clean, closed case with fresh solution",
            "Dry in a contact lens case"
        ],
        answer: 2,
        explanation: "Contact lenses should be stored in a clean, closed case with fresh solution when not being worn. The solution should be changed each time the lenses are stored, and the case should be cleaned and air-dried regularly to prevent microbial contamination."
    },
    {
        question: "What is the proper hand washing procedure before handling contact lenses?",
        options: [
            "Rinse with water only",
            "Use antibacterial soap, rinse thoroughly, and dry with a lint-free towel",
            "Use any available soap and dry hands on clothing",
            "Clean hands with alcohol-based hand sanitizer"
        ],
        answer: 1,
        explanation: "Proper hand washing before handling contact lenses involves using antibacterial soap, rinsing thoroughly, and drying with a lint-free towel. This reduces the risk of transferring microorganisms and debris to the lens and eye. Alcohol-based hand sanitizers can transfer to the lens and cause eye irritation."
    },
    {
        question: "What should be emphasized when teaching a new RGP lens wearer about lens care?",
        options: [
            "RGP lenses rarely need cleaning",
            "RGP lenses should be rubbed and rinsed daily to remove deposits",
            "RGP lenses can be stored dry overnight",
            "RGP lenses should be replaced monthly"
        ],
        answer: 1,
        explanation: "RGP lenses should be rubbed and rinsed daily to remove deposits. Unlike some soft lenses, RGP lenses are not disposable and can accumulate lipid and protein deposits over time. Daily cleaning with a surfactant cleaner, followed by rinsing and soaking in conditioning/disinfecting solution, is essential for comfort and lens longevity."
    },
    {
        question: "What should a patient do if a soft contact lens feels uncomfortable upon insertion?",
        options: [
            "Continue wearing it until the discomfort subsides",
            "Apply eye drops while wearing the lens",
            "Remove the lens, rinse with solution, and reinsert",
            "Switch to glasses for the rest of the day"
        ],
        answer: 2,
        explanation: "If a soft contact lens feels uncomfortable upon insertion, the patient should remove the lens, rinse it with fresh solution, and reinsert it. Discomfort may be caused by debris, an inside-out lens, or a damaged lens. If discomfort persists after reinsertion, the lens should be removed and the eye care practitioner consulted."
    },
    {
        question: "What is the correct way to verify the orientation of a soft contact lens before insertion?",
        options: [
            "Place the lens on a fingertip and look at its profile",
            "Check the tint pattern",
            "Look for laser markings",
            "Feel the edge thickness"
        ],
        answer: 0,
        explanation: "The correct way to verify the orientation of a soft contact lens before insertion is to place it on a fingertip and look at its profile. A properly oriented lens will have edges that turn slightly upward, resembling a bowl. An inside-out lens will have edges that flare outward and may appear more flat or irregularly shaped."
    },
    
    // Domain 7: Follow-up
    {
        question: "How soon after initial dispensing should the first follow-up visit be scheduled for a new contact lens wearer?",
        options: [
            "The same day",
            "Within 1-2 weeks",
            "After 1 month",
            "After 3 months"
        ],
        answer: 1,
        explanation: "The first follow-up visit for a new contact lens wearer should typically be scheduled within 1-2 weeks after initial dispensing. This timeframe allows assessment of the patient's adaptation to the lenses, evaluation of the fit and vision after regular wear, and addressing any compliance or comfort issues early in the wearing experience."
    },
    {
        question: "What is the primary purpose of corneal topography at follow-up visits?",
        options: [
            "To evaluate changes in corneal curvature and look for warpage",
            "To determine if a prescription change is needed",
            "To check for corneal edema",
            "To evaluate tear film quality"
        ],
        answer: 0,
        explanation: "The primary purpose of corneal topography at follow-up visits is to evaluate changes in corneal curvature and look for corneal warpage or molding. This is particularly important for RGP lens wearers or those with overnight orthokeratology lenses, as these can induce changes to the corneal shape."
    },
    {
        question: "Which grading scale is commonly used to evaluate contact lens complications?",
        options: [
            "Snellen scale",
            "VARK scale",
            "Efron or CCLRU grading scales",
            "LogMAR scale"
        ],
        answer: 2,
        explanation: "The Efron or CCLRU (Cornea and Contact Lens Research Unit) grading scales are commonly used to evaluate contact lens complications. These standardized scales (typically 0-4) help practitioners assess and document the severity of conditions like conjunctival hyperemia, corneal staining, tarsal conjunctival changes, and limbal redness."
    },
    {
        question: "What finding at a follow-up visit would necessitate discontinuation of contact lens wear?",
        options: [
            "Grade 1 corneal staining",
            "Mild lens deposits",
            "Corneal infiltrates with pain and redness",
            "Slight lens decentration"
        ],
        answer: 2,
        explanation: "Corneal infiltrates with pain and redness would necessitate discontinuation of contact lens wear. This presentation suggests a possible microbial keratitis or severe inflammatory response, which requires immediate discontinuation of lens wear and often requires treatment with antibiotics or other medications."
    },
    {
        question: "How should you manage a patient who presents with a tight-fitting soft contact lens at a follow-up visit?",
        options: [
            "Increase wearing time to stretch the lens",
            "Switch to a flatter base curve or different material",
            "Increase lens power",
            "Recommend more frequent replacement"
        ],
        answer: 1,
        explanation: "A patient with a tight-fitting soft contact lens should be refitted with a flatter base curve or different lens material with better oxygen permeability. Tight lenses restrict movement and tear exchange, which can lead to corneal hypoxia, neovascularization, and discomfort. Different materials may also reduce binding or adherence to the cornea."
    },
    {
        question: "What is the recommended follow-up schedule for an established contact lens wearer with no problems?",
        options: [
            "Every month",
            "Every 3-4 months",
            "Every 6-12 months",
            "Only when experiencing problems"
        ],
        answer: 2,
        explanation: "For established contact lens wearers with no problems, a follow-up schedule of every 6-12 months is generally recommended. This allows for regular assessment of ocular health, lens fit, vision, and compliance, even when patients are asymptomatic, as some contact lens complications can develop without noticeable symptoms."
    },
    
    // Domain 8: Regulatory and Administrative
    {
        question: "According to FDA regulations, contact lenses are classified as:",
        options: [
            "Cosmetics",
            "Over-the-counter medical devices",
            "Prescription medical devices",
            "Vision correction appliances"
        ],
        answer: 2,
        explanation: "According to FDA regulations, contact lenses are classified as prescription medical devices. This classification applies to all contact lenses, including plano (non-prescription) cosmetic lenses. As prescription devices, contact lenses require a valid prescription and proper fitting by a licensed eye care professional."
    },
    {
        question: "What is required for a valid contact lens prescription?",
        options: [
            "Lens power only",
            "Base curve and diameter only",
            "Power, base curve, diameter, lens material/brand, and expiration date",
            "Patient's name and prescriber's signature only"
        ],
        answer: 2,
        explanation: "A valid contact lens prescription must include lens power, base curve, diameter, lens material or brand, and an expiration date, along with the patient's name and prescriber's information and signature. This comprehensive information ensures the contact lenses are properly fitted to the patient's specific ocular needs."
    },
    {
        question: "What is the maximum expiration period for a contact lens prescription under the Fairness to Contact Lens Consumers Act (FCLCA)?",
        options: [
            "6 months",
            "1 year",
            "2 years",
            "Varies by state law"
        ],
        answer: 3,
        explanation: "The maximum expiration period for a contact lens prescription varies by state law under the Fairness to Contact Lens Consumers Act (FCLCA). While the FCLCA requires prescribers to provide patients with their prescriptions, it defers to state laws regarding expiration dates, which typically range from 1-2 years."
    },
    {
        question: "What fluorescein pattern indicates a flat-fitting RGP lens?",
        options: [
            "Central pooling with peripheral touch",
            "Central touch with peripheral pooling",
            "Even fluorescein distribution",
            "No fluorescein pattern visible"
        ],
        answer: 1,
        explanation: "A flat-fitting RGP lens (where the base curve is flatter than the cornea) creates a fluorescein pattern with central touch (appears dark) and peripheral pooling (appears bright green). This indicates excessive apical bearing which can lead to corneal staining and discomfort."
    },
    {
        question: "When evaluating soft lens fit with keratometry mires, if the mires are only clear when the wearer blinks, the lens fit is too:",
        options: [
            "Small",
            "Large",
            "Steep",
            "Flat"
        ],
        answer: 3,
        explanation: "When keratometry mires reflected off a soft contact lens are only clear immediately after a blink, it indicates a flat-fitting lens. The lens moves excessively and settles into a more stable position only momentarily after a blink, causing distortion of the mires between blinks."
    },
    {
        question: "What is the appropriate management for a patient presenting with a tight-fitting soft contact lens?",
        options: [
            "Increase wearing time to stretch the lens",
            "Switch to a flatter base curve or different material",
            "Increase lens power",
            "Recommend more frequent replacement"
        ],
        answer: 1,
        explanation: "A patient with a tight-fitting soft contact lens should be refitted with a flatter base curve or different lens material with better oxygen permeability. Tight lenses restrict movement and tear exchange, which can lead to corneal hypoxia, neovascularization, and discomfort."
    },
    {
        question: "A rigid lens showing excessive apical pooling is an indication of:",
        options: [
            "A steep fit",
            "An alignment fit",
            "A flat fit",
            "A spherical fit on an astigmatic cornea"
        ],
        answer: 0,
        explanation: "Excessive apical pooling (bright green fluorescein in the center) indicates a steep-fitting rigid lens. The base curve of the lens is steeper than the corneal curvature, causing the lens to vault the central cornea and only touch in the periphery."
    },
    {
        question: "Which of the following is a characteristic of a loose-fitting soft lens?",
        options: [
            "Conjunctival indentation",
            "Limited movement with blinking",
            "Edge standoff",
            "Lens adherence"
        ],
        answer: 2,
        explanation: "Edge standoff is a characteristic of a loose-fitting soft lens. This occurs when the edge of the lens lifts away from the eye rather than conforming to the ocular surface. Other signs include excessive movement with blinking and possible decentration."
    },
    
    // Toric Lenses
    {
        question: "If a diagnostic toric soft lens with axis 180 rotated 10 degrees clockwise during evaluation, what axis should be ordered?",
        options: [
            "10 degrees",
            "170 degrees",
            "180 degrees",
            "190 degrees"
        ],
        answer: 1,
        explanation: "If a toric lens rotates 10 degrees clockwise (to the right), the ordered lens axis should be adjusted 10 degrees counterclockwise from the desired axis. In this case, to achieve an axis of 180 in situ, the ordered lens should have an axis of 170 degrees. This follows the LARS principle (Left Add, Right Subtract)."
    },
    {
        question: "A back toric soft lens works best with:",
        options: [
            "Residual astigmatism",
            "High corneal toricity",
            "Low corneal toricity",
            "Spherical toricity"
        ],
        answer: 1,
        explanation: "A back toric soft lens works best with high corneal toricity. The toric back surface of the lens aligns with the toric corneal surface, providing better centration and stability, especially when the corneal astigmatism is significant (generally > 2.00D)."
    },
    {
        question: "What is the primary consideration when fitting a toric soft contact lens?",
        options: [
            "Base curve only",
            "Lens diameter only",
            "Lens power only",
            "Rotational stability"
        ],
        answer: 3,
        explanation: "Rotational stability is the primary consideration when fitting toric soft contact lenses. Since toric lenses correct astigmatism, the lens must maintain proper orientation to align the cylindrical correction with the patient's astigmatic axis. Various stabilization methods (prism ballast, peri-ballast, dual thin zones) help achieve this stability."
    },
    
    // Corneal Findings and Complications
    {
        question: "What is the most likely cause of '3 and 9 o'clock staining' observed in an RGP lens wearer?",
        options: [
            "Lens too steep",
            "Lens too flat",
            "Lens decentration",
            "Insufficient tear exchange"
        ],
        answer: 1,
        explanation: "3 and 9 o'clock staining (also called peripheral corneal desiccation) is often caused by a flat-fitting RGP lens. The lens doesn't adequately cover the horizontal meridian, exposing these areas to dehydration. It can also be caused by poor lid apposition, reduced blink rate, or lens edge design issues."
    },
    {
        question: "Diffuse central punctate staining observed during slit lamp examination is most likely an indication of:",
        options: [
            "A loose-fitting lens",
            "A tight-fitting lens",
            "Solution sensitivity",
            "Normal adaptation"
        ],
        answer: 1,
        explanation: "Diffuse central punctate staining is typically an indication of a tight-fitting lens. A tight lens restricts tear exchange and oxygen transmission, leading to epithelial compromise, particularly in the central cornea where the lens has the most contact."
    },
    {
        question: "Corneal edema is observed inferiorly under a prism ballast toric soft lens. What is the probable cause?",
        options: [
            "The lens is too tight overall",
            "The prism thickness is too great",
            "The lens is too loose",
            "The optical zone is too small"
        ],
        answer: 1,
        explanation: "Corneal edema observed inferiorly under a prism ballast toric soft lens is likely caused by the prism thickness being too great. The thicker portion of the lens (the prism ballast) restricts oxygen transmission to that area of the cornea, potentially causing localized hypoxia and edema."
    },
    
    // Slit Lamp Examination
    {
        question: "What slit lamp illumination technique is best for evaluating the fluorescein pattern of an RGP lens?",
        options: [
            "Diffuse illumination",
            "Sclerotic scatter",
            "Cobalt blue filter with yellow Wratten filter",
            "Direct focal illumination"
        ],
        answer: 2,
        explanation: "The cobalt blue filter with a yellow Wratten filter is best for evaluating the fluorescein pattern of an RGP lens. The cobalt blue excites the fluorescein dye while the yellow filter enhances contrast by blocking reflected blue light, making the fluorescein pattern more visible."
    },
    {
        question: "Epithelial edema which manifests as central corneal haze is best verified by slit lamp using:",
        options: [
            "The naked eye and an angle between the slit lamp beam and the eye of 90°",
            "The blue cobalt filter and an angle of about 45°",
            "The green filter with high magnification",
            "High magnification and an angle between the beam and scope of 180°"
        ],
        answer: 0,
        explanation: "Epithelial edema manifesting as central corneal haze is best verified using sclerotic scatter illumination, which involves viewing with the naked eye at an angle of approximately 90° between the slit lamp beam and the viewing axis. This technique highlights irregularities in corneal transparency."
    },
    
    // Contact Lens Materials and Properties
    {
        question: "When comparing high DK silicone acrylate polymers to earlier generation materials, which of the following is true?",
        options: [
            "They have better wetting characteristics",
            "They have poorer wetting characteristics",
            "They are more prone to deposit formation",
            "They have lower oxygen permeability"
        ],
        answer: 1,
        explanation: "High DK silicone acrylate polymers typically have poorer wetting characteristics compared to earlier generation materials. Despite their excellent oxygen permeability, the silicone component tends to be hydrophobic, making the lens surface less wettable unless treated with special surface treatments or plasma coatings."
    },
    {
        question: "What is the typical amount of oxygen transmission needed to avoid corneal edema during daily wear?",
        options: [
            "At least 24 Dk/t",
            "At least 35 Dk/t",
            "At least 87 Dk/t",
            "At least 125 Dk/t"
        ],
        answer: 0,
        explanation: "For daily wear contact lenses, a minimum oxygen transmissibility (Dk/t) value of approximately 24 is typically needed to avoid corneal edema. For extended or overnight wear, much higher values (87 Dk/t or greater) are recommended to maintain corneal health."
    },
    
    // Lens Verification
    {
        question: "When the CPC (central posterior curve) of a rigid lens was ordered at 7.84mm but received measuring 7.94mm, this lens is _____ than ordered.",
        options: [
            "0.50D steeper",
            "1.00D flatter",
            "0.50D flatter",
            "1.00D steeper"
        ],
        answer: 2,
        explanation: "When the CPC of a rigid lens measures 7.94mm instead of the ordered 7.84mm, it is 0.50D flatter than ordered. A larger radius of curvature (in mm) corresponds to a flatter curve. The relationship is approximately 0.50D for each 0.10mm change in radius."
    },
    {
        question: "A rigid lens shows two base curves on the radiuscope but displays a spherical power on the lensometer. This indicates:",
        options: [
            "A normal spherical lens",
            "A front toric lens",
            "A back toric lens",
            "A warped lens"
        ],
        answer: 3,
        explanation: "A rigid lens that shows two base curves on the radiuscope but displays a spherical power on the lensometer indicates a warped lens. In a properly manufactured lens, specific designs should show predictable patterns: spherical lenses show one base curve and spherical power; back toric lenses show two base curves and toroidal power; front toric lenses show one base curve and toroidal power."
    },
    
    // Specialty Lenses
    {
        question: "Which lens design would be most appropriate for a patient with keratoconus?",
        options: [
            "Standard alignment fitting RGP",
            "Soper or Rose K design",
            "Aspheric soft lens",
            "Standard toric soft lens"
        ],
        answer: 1,
        explanation: "Specialty designs like Soper or Rose K are most appropriate for patients with keratoconus. These designs feature steeper central curves to vault over the cone with flatter peripheral curves to align with the normal peripheral cornea, providing better centration, stability, and vision than standard design lenses."
    },
    {
        question: "For a patient who has undergone penetrating keratoplasty (corneal transplant), what fitting approach is typically most effective?",
        options: [
            "Standard soft lens fitting",
            "Toric soft lens fitting",
            "Diagnostic RGP fitting with fluorescein assessment",
            "Empirical fitting based on keratometry readings"
        ],
        answer: 2,
        explanation: "For post-penetrating keratoplasty patients, a diagnostic RGP fitting with fluorescein assessment is typically most effective. The transplanted cornea often has irregular astigmatism and elevation disparities at the graft-host junction that require direct evaluation with trial lenses rather than relying solely on keratometry readings or empirical formulas."
    },
    
    // Regulatory and Administrative
    {
        question: "According to FDA regulations, what risk category are contact lenses classified under?",
        options: [
            "Class I (low risk)",
            "Class II (moderate risk)",
            "Class III (high risk)",
            "Over-the-counter devices"
        ],
        answer: 2,
        explanation: "According to FDA regulations, contact lenses are classified as Class III (high risk) medical devices. This classification applies to all contact lenses, including plano (non-prescription) cosmetic lenses, due to their direct contact with the eye and potential for serious complications if improperly fitted or used."
    },
    {
        question: "What is the maximum expiration period for a contact lens prescription under the Fairness to Contact Lens Consumers Act (FCLCA)?",
        options: [
            "6 months",
            "1 year",
            "2 years",
            "Varies by state law"
        ],
        answer: 3,
        explanation: "The maximum expiration period for a contact lens prescription varies by state law under the Fairness to Contact Lens Consumers Act (FCLCA). While the FCLCA requires prescribers to provide patients with their prescriptions, it defers to state laws regarding expiration dates, which typically range from 1-2 years."
    },
    
    // Additional Questions
    {
        question: "What is the best way to evaluate the fit of a multifocal soft contact lens?",
        options: [
            "Assess lens movement only",
            "Check distance vision only",
            "Check near vision only",
            "Evaluate lens centration, movement, and visual performance at multiple distances"
        ],
        answer: 3,
        explanation: "The best way to evaluate the fit of a multifocal soft contact lens is to assess lens centration, movement, and visual performance at multiple distances. Proper centration is critical for simultaneous vision designs, as decentration can significantly affect the balance between distance and near vision."
    },
