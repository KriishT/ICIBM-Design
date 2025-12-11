export default function SubmissionPage() {
  const topicsBioinformatics = [
    "Genomics and genetics/epigenetics, including integrative & functional genomics, genome evolution",
    "Next-generation sequencing data analysis, 3D genome",
    "Big data science including storage, analysis, modeling, visualization, and cloud",
    "Precision medicine, translational bioinformatics",
    "Drug discovery, design, and re-purposing",
    "Proteomics, and protein structure prediction, function, and interactions",
    "Single-cell sequencing data analysis",
    "Spatial omics data analysis",
    "Microbiome and metagenomics",
    "Multi-dimensional omics data integration",
  ];

  const topicsAI = [
    "Artificial intelligence, machine learning, deep learning, data mining, knowledge discovery",
    "Large language model, foundation model, and computer vision in biomedical",
    "Natural language processing, literature mining, semantic ontology, and health informatics",
    "Evolutionary computing, swarm intelligence / optimization, ensemble methods",
    "Artificial life and artificial immune system",
    "Biomedical image analysis and processing",
    "Digital health and wearable devices",
  ];

  const topicsSystemsBiology = [
    "Modeling and simulation of biological processes, pathways, networks, and interactomes",
    "Modeling of cellular and multi-cellular interaction systems",
    "Synthetic biological systems",
    "Metabolomics, microbiome, and lipidomics",
    "Self-organization in living systems (cells, organisms, swarms, ecosystems, etc.)",
  ];

  const topicsBiomedical = [
    "Cohort discovery, EHR-based phenotyping, predictive modeling",
    "Data quality assessment or validation",
    "Clinical decision support solutions",
    "Informatics to address disparities in health and health care",
    "Interoperability (e.g., ontology, terminology, standards, and others)",
    "Machine learning for clinical applications, genome, and phenome analysis/associations",
    "Mobile health and wearable devices",
    "Human-computer interaction and human factors",
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Submission</h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8">
          <p className="text-gray-700 text-lg">
            We invite you to submit papers and abstracts presenting original,
            unpublished work that describes recent advances in all areas of
            bioinformatics, artificial intelligence, systems biology, and
            biomedical informatics.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bioinformatics */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Bioinformatics and Computational Biology
            </h3>
            <ul className="space-y-2">
              {topicsBioinformatics.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI and Machine Learning */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Artificial Intelligence and Machine Learning
            </h3>
            <ul className="space-y-2">
              {topicsAI.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems Biology */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Systems Biology
            </h3>
            <ul className="space-y-2">
              {topicsSystemsBiology.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Biomedical Informatics */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Biomedical Informatics
            </h3>
            <ul className="space-y-2">
              {topicsBiomedical.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Paper Submission */}
        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Paper Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Prospective authors are invited to submit original, unpublished
                work to ICIBM 2026. Selected papers from registered authors will
                be considered for publication in special issues of{" "}
                <strong>Briefings in Bioinformatics</strong>,{" "}
                <strong>Frontiers in Genetics</strong>,<strong> Cancers</strong>
                , and the{" "}
                <strong>
                  Computational and Structural Biotechnology Journal
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Abstract Submission */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Abstract Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Abstracts should be ≤400 words using the conference-provided
                template. Papers already published or accepted for publication
                are also welcome.
              </p>
              <p>
                Please submit your abstract to{" "}
                <a
                  href="mailto:icibm2026@gmail.com"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  icibm2026@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
