module.exports = {
  name: "Nora Petrova",
  title: "AI Research Engineer",
  facts: {
    Location:
      '<a href="https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416814,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862"><i class="fa fa-home fact-icon"></i>London</a>',
    GitHub: `<a href="https://github.com/nlpet">
                  <i class="fa-brands fa-github fact-icon"></i>github.com/nlpet
                </a>`,
    LinkedIn: `<a href="https://linkedin.com/in/nora-petrova">
              <i class="fa-brands fa-linkedin fact-icon"></i>linkedin.com/in/nora-petrova
            </a>`,
    Email:
      '<a href="mailto:nora.axion@gmail.com"><i class="fa fa-envelope fact-icon"></i>nora.axion@gmail.com</a>',
  },
  positions: [
    {
      title: "Staff Research Engineer @ Prolific",
      period: "May 2023 - Present",
      skills: [
        "AI Evaluation",
        "AI Safety",
        "Alignment",
        "LLMs",
        "Agentic Evals",
        "Python",
        "R&D",
      ],
      contents: `- Leading AI evaluation research, building agentic and human-in-the-loop evaluation frameworks for studying safety and alignment in frontier models
- Led [HUMAINE](https://huggingface.co/spaces/ProlificAI/humaine-leaderboard), a large-scale evaluation of human experience in using AI — paper accepted at [ICLR 2026](https://openreview.net/pdf?id=kVaE2kYjtV)
- Developed [commercial pressure evaluations](https://github.com/prolific-oss/commercial-pressure-evals) testing how frontier models respond when commercial objectives conflict with user safety, finding most models have no "red line" — won 1st place at the [AI Manipulation Hackathon](https://apartresearch.com/project/who-does-your-ai-serve-manipulation-by-and-of-ai-assistants-77xx), presenting at [IASEAI 2026](https://iaseai.org/)
- Developed a behavioural alignment benchmark with an [interactive leaderboard](https://huggingface.co/spaces/nlpetprolific/alignment-leaderboard) and co-authored [Pressure Reveals Character](https://arxiv.org/abs/2602.20813)
- Working on agentic evaluations for ethical decision making, mechanistic interpretability of refusal circuits and black-box prefix attacks in open source models, and studying how to decouple reasoning from knowledge using tiny recursive models (TRMs)
- Involved in cross-team projects including synthetic polling, agent detection, LLM usage detection, and multi-human-agent collaboration studies
- Earlier work included developing an open source [social reasoning RLHF dataset](https://huggingface.co/datasets/ProlificAI/social-reasoning-rlhf) and researching methods for aligning LLMs to human values
`,
    },
    {
      title: "AI Safety Researcher @ LASR Labs",
      period: "July 2024 - Sept 2024",
      skills: ["LLMs", "AI Safety", "Mechanistic Interpretability"],
      contents: `Research into AI safety as part of the [LASR Labs](https://www.lasrlabs.org/) 12-week research programme. Investigated how synthetic activations composed of SAE latents compare to real model activations in GPT-2, measuring sensitivity via KL divergence of output logits. Found that while synthetic activations behave comparably to real ones under sparsity and geometric similarity metrics, real activations contain structural properties beyond independent components. Paper [Evaluating Synthetic Activations composed of SAE Latents in GPT-2](https://arxiv.org/abs/2409.15019) accepted at NeurIPS 2024.
`,
    },
    {
      title: "AI Safety Researcher @ Apart Research",
      period: "May 2024 - Ongoing",
      skills: ["NLP", "LLMs", "AI Safety"],
      contents: `Research fellowship (now ongoing collaboration) into AI safety alongside role at Prolific. Studied how [latent adversarial training](https://arxiv.org/abs/2403.05030) (LAT) affects how language models encode refusal. Found that LAT concentrates refusal representation into fewer SVD components, making models more robust against external attacks but paradoxically more vulnerable to self-generated attack vectors. Paper [LAT Improves the Representation of Refusal](https://arxiv.org/abs/2504.18872) accepted at ICLR 2025.
`,
    },
    {
      title: "NLP Engineer / Julia Developer @ planting.space [contract]",
      period: "May 2023 - Mar 2024",
      skills: [
        "NLP",
        "LLMs",
        "Python",
        "Julia",
        "Javascript",
        "React",
        "AWS",
        "Research",
        "Full Stack",
      ],
      contents: `- Developed a knowledge representation system by leveraging insights from Bayesian Inference, Category
      Theory and Natural Language Processing, using the Julia programming language and Python for NLP
- Researched and implemented state of the art methods within NLP using LLMs, including advanced prompting
techniques and fine-tuning of models
- Developed, deployed and maintained an internal search tool for finding relevant internal documents using
semantic search on chunked vectorised documents. The tool integrated with multiple internal systems
`,
    },
    {
      title: "Lead Software Engineer @ Signal.ai",
      period: "Apr 2022 - May 2023",
      skills: [],
      contents: `- Led a team of engineers and researchers developing ML models and services for mention detection, entity disambiguation, sentiment analysis, text classification, and zero/few-shot learning
- Researched state-of-the-art NLP techniques, prototyped applications, and developed production-ready pipeline services using transformer-based models
- Built a RAG prototype searching against a large Elasticsearch cluster of news documents to respond to arbitrary queries
`,
    },
  ],
  earlierRoles: [
    { title: "Senior Product Engineer", company: "Primer.ai", period: "2021 – 2022" },
    { title: "ML Engineer → Principal ML Engineer", company: "Datatonic", period: "2018 – 2021" },
    { title: "ML Engineer / Researcher", company: "Prodo.ai", period: "2017 – 2018" },
    { title: "Full Stack Engineer", company: "R3PI, Digital Catapult, AXS", period: "2012 – 2017" },
  ],
  experience: [
    {
      header: "Democracy x AI Hackathon (May 2024)",
      skills: ["NLP", "LLMs", "AI Safety"],
      contents: `Participated in a [Hackathon](https://www.apartresearch.com/event/ai-democracy) organised by [Apart Lab](https://www.apartresearch.com/). I worked on a project that explored how using Sleeper Agents can have repercussions to democratic processes. More information about the project is available on the [project page](https://www.apartresearch.com/project/unleashing-sleeper-agents).
      `,
    },
    {
      header: "InterpVis Hackathon (Apr 2024)",
      skills: ["NLP", "LLMs", "Mechanistic Interpretability", "Visualisations"],
      contents: `Participated in a [Hackathon](https://www.apartresearch.com/event/interpvis-apr-2024) organised by [Apart Lab](https://www.apartresearch.com/) and [LISA](https://www.safeai.org.uk/). The team I was in worked on visualising correlations between features across layers in an SAE trained on activations from the residual stream. We developed a prototype for visualising the relationships between features as a directed graph and linked features to [Neuronpedia](https://www.neuronpedia.org/) for further analysis. The code for the tool can be found in its [GitHub repository](https://github.com/nlpet/sae-feature-graph-vis).
      `,
    },
    {
      header: "Testing LLMs for Autonomous Capabilities Hackathon (Mar 2024)",
      skills: ["NLP", "LLMs", "R&D"],
      contents: `Participated in a [Hackathon](https://www.apartresearch.com/event/codered) organised by [Apart Lab](https://www.apartresearch.com/) and [METR](https://metr.org/) where the goal was to develop tasks to detect replication and R&D capabilities of LLMs. I worked on a task about capabilities of LLMs to introduce backdoors in datasets and to fine-tune other models on them. Based on research from the [Sleeper Agents paper](https://arxiv.org/abs/2401.05566) by Anthropic.
      `,
    },
    {
      header: "Anthropic Claude Hackathon (Nov 2023)",
      skills: ["NLP", "LLMs", "Next.js", "React", "Javascript", "R&D"],
      contents: `Participated in a [Hackathon](https://anthropiclondon.devpost.com/) organised by Anthropic London. I developed an app that uses Claude to help us make sense of the News. Its aim is to introduce nuance and multiple perspectives, and enable us to entertain multiple points of view when we make up our minds about current events. [GitHub Repository](https://github.com/nlpet/anthropic-hackathon-claude) for the project.`,
    },
  ],
};
