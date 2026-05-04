## 001-folder-structure

Options considered:

- Layer/Type-based
  - Files are grouped by type (components, hooks, services, types, etc.)
  - Cost: Can become messy over time and harder to scale
  - Benefit: Very easy to start and understand
- Feature-based
  - One folder per feature, plus a shared folder for common code
  - Cost: Slightly more setup complexity at the beginning
  - Benefit: Easier to scale and maintain; better for teams since each feature is self-contained

Decision: Layer-based

Rationale:
This is a solo project and the codebase is still small. A simple structure is enough for now, and feature-based architecture would add unnecessary complexity at this stage.

Reversibility: Easy

When to revisit:
If the project grows, or if I start needing to change multiple folders for a single feature, or if the current structure becomes hard to manage, or if I want that 🙃
