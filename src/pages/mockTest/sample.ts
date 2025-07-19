import type { QuestionAPIResponse } from "@/types/question";

export const sampleQuestionPaper: QuestionAPIResponse = {
    "subcode": "mcan301",
    "university": "makaut",
    "timestamp": 1752854992023,
    "question": [
        {
            "question": "Which UML diagram is fundamentally used to depict the static structure of a system by showing classes, their attributes, operations, and the various relationships between them?",
            "options": [
                "Use Case Diagram",
                "Sequence Diagram",
                "Class Diagram",
                "Activity Diagram"
            ],
            "answer": "Class Diagram",
            "description": "The Class Diagram is the most fundamental structural diagram in UML, representing the static structure of a system's classes, their features, and how they relate.",
            "hardness": "easy"
        },
        {
            "question": "What is the primary benefit of 'Partitioning the Analysis Model' into subsystems during the System Design phase of OOD?",
            "options": [
                "To eliminate the need for detailed design.",
                "To reduce the overall number of classes in the system.",
                "To manage complexity, allow concurrent development, and facilitate independent evolution and maintenance of parts.",
                "To force the use of a specific programming language for implementation."
            ],
            "answer": "To manage complexity, allow concurrent development, and facilitate independent evolution and maintenance of parts.",
            "description": "Partitioning a system into subsystems helps in breaking down a large, complex problem into smaller, more manageable units, which facilitates parallel development and easier maintenance.",
            "hardness": "medium"
        },
        {
            "question": "What is a fundamental characteristic that distinguishes software from physical products in terms of engineering deterioration?",
            "options": [
                "Software wears out over time due to friction.",
                "Software deteriorates primarily due to lack of maintenance.",
                "Software does not wear out but deteriorates due to changes and evolving requirements.",
                "Software is immune to any form of deterioration."
            ],
            "answer": "Software does not wear out but deteriorates due to changes and evolving requirements.",
            "description": "Unlike physical products that wear out, software does not physically deteriorate. Its 'deterioration' comes from changes (bugs introduced, new requirements, environment changes) that make it less useful or harder to maintain.",
            "hardness": "hard"
        },
        {
            "question": "In object-oriented programming, a 'Class' serves as a:",
            "options": [
                "Storage location for data.",
                "Runtime instance of an object.",
                "Blueprint or template for creating objects.",
                "Single function or method."
            ],
            "answer": "Blueprint or template for creating objects.",
            "description": "A class is a definition or blueprint from which objects (instances) are created. It defines the structure and behavior that all objects of that class will have.",
            "hardness": "easy"
        },
        {
            "question": "The 'Software Engineering Development Activities' typically include all of the following EXCEPT:",
            "options": [
                "Software Requirements Analysis.",
                "Software Design.",
                "Software Manufacturing and Packaging.",
                "Software Testing."
            ],
            "answer": "Software Manufacturing and Packaging.",
            "description": "Core software engineering development activities include requirements, design, implementation, testing, and maintenance. Manufacturing and packaging are typically associated with physical products or distribution, not the engineering development of software itself.",
            "hardness": "medium"
        },
        {
            "question": "Regarding object relationships, which statement accurately describes the dependency difference between 'Composition' and 'Aggregation'?",
            "options": [
                "In Aggregation, the part's lifecycle is dependent on the whole; in Composition, it is independent.",
                "In Composition, the part's lifecycle is dependent on the whole; in Aggregation, it is independent.",
                "Both Composition and Aggregation imply equal lifecycle dependency between part and whole.",
                "Neither Composition nor Aggregation has any implications for lifecycle dependency."
            ],
            "answer": "In Composition, the part's lifecycle is dependent on the whole; in Aggregation, it is independent.",
            "description": "Composition is a strong 'part-of' relationship where the part cannot exist without the whole (e.g., a room in a house). Aggregation is a weaker 'has-a' relationship where the part can exist independently (e.g., a car has an engine, but the engine can exist outside the car).",
            "hardness": "hard"
        },
        {
            "question": "The principle of 'Polymorphism' primarily enables which capability in object-oriented systems?",
            "options": [
                "The ability to create new classes from existing ones.",
                "The ability for objects of different classes to respond to the same message in different ways.",
                "The ability to conceal the internal implementation details of an object.",
                "The ability to group related classes into packages."
            ],
            "answer": "The ability for objects of different classes to respond to the same message in different ways.",
            "description": "Polymorphism, meaning 'many forms', allows objects of different classes to be treated as objects of a common type, and to respond to the same method call (message) in ways appropriate to their specific type.",
            "hardness": "medium"
        },
        {
            "question": "What is the main purpose of developing an 'Object-Oriented Conceptual Model' in the early stages of system development?",
            "options": [
                "To directly generate executable code.",
                "To understand the problem domain in terms of real-world entities and their relationships, serving as a foundation for design.",
                "To test the system's performance under load.",
                "To manage project resources and timelines."
            ],
            "answer": "To understand the problem domain in terms of real-world entities and their relationships, serving as a foundation for design.",
            "description": "A conceptual model, particularly in an object-oriented context, focuses on understanding the problem domain by identifying real-world concepts (objects) and their relationships, providing a high-level, abstract view before detailed design.",
            "hardness": "easy"
        },
        {
            "question": "In a UML Class Diagram, a dashed arrow pointing from Class A to Class B typically indicates what kind of relationship?",
            "options": [
                "Inheritance",
                "Aggregation",
                "Dependency",
                "Composition"
            ],
            "answer": "Dependency",
            "description": "A dashed arrow in UML (often with an open arrowhead) represents a dependency, meaning that changes in the target (Class B) might affect the source (Class A), but not necessarily vice versa.",
            "hardness": "hard"
        },
        {
            "question": "How do 'Packages' effectively manage the complexity and organization of large-scale UML models?",
            "options": [
                "By defining the physical deployment locations of components.",
                "By enforcing strict temporal ordering of events.",
                "By providing a mechanism to group related model elements, creating namespaces and controlling visibility.",
                "By automatically generating test cases for the enclosed elements."
            ],
            "answer": "By providing a mechanism to group related model elements, creating namespaces and controlling visibility.",
            "description": "Packages are used to organize model elements into logical groups, reducing complexity by breaking down a large model, providing unique namespaces for elements within them, and controlling the visibility of elements across package boundaries.",
            "hardness": "hard"
        },
        {
            "question": "What is the primary advantage of using an 'Object Diagram' over a 'Class Diagram' in specific modeling scenarios?",
            "options": [
                "Object Diagrams can show the full inheritance hierarchy, which Class Diagrams cannot.",
                "Object Diagrams illustrate the dynamic behavior of objects, unlike static Class Diagrams.",
                "Object Diagrams capture a concrete snapshot of instances with their attribute values and specific links at a given time, which Class Diagrams cannot.",
                "Object Diagrams are better for defining abstract classes and interfaces."
            ],
            "answer": "Object Diagrams capture a concrete snapshot of instances with their attribute values and specific links at a given time, which Class Diagrams cannot.",
            "description": "While a Class Diagram defines the structure of classes, an Object Diagram shows actual instances of those classes (objects) at a particular moment, including the specific values of their attributes and the links between them, providing a concrete example of the system's state.",
            "hardness": "hard"
        },
        {
            "question": "Which UML behavioral diagram is most suitable for modeling a step-by-step workflow of activities, often including decision points, forks, and joins, representing the flow of control within a system or business process?",
            "options": [
                "State Chart Diagram",
                "Sequence Diagram",
                "Activity Diagram",
                "Use Case Diagram"
            ],
            "answer": "Activity Diagram",
            "description": "Activity Diagrams are specifically designed to model the flow of control and workflows within a system, showing sequences of activities, decisions, and parallel paths.",
            "hardness": "easy"
        },
        {
            "question": "The main strength of a 'Use Case Diagram' lies in its ability to:",
            "options": [
                "Detail the internal design of software modules.",
                "Capture and illustrate the functional requirements of a system from the perspective of external users.",
                "Show the sequence of messages between objects at runtime.",
                "Define the data structures used by the system."
            ],
            "answer": "Capture and illustrate the functional requirements of a system from the perspective of external users.",
            "description": "Use Case Diagrams are excellent for defining the system's functional requirements by showing how external actors interact with the system to achieve specific goals, without detailing the internal implementation.",
            "hardness": "easy"
        },
        {
            "question": "In a UML 'Sequence Diagram', what does the 'loop' combined fragment specifically indicate?",
            "options": [
                "An alternative path in the message sequence.",
                "A message that can be sent optionally.",
                "A sequence of messages that is repeated a specified number of times or until a condition is met.",
                "A message that is sent concurrently with other messages."
            ],
            "answer": "A sequence of messages that is repeated a specified number of times or until a condition is met.",
            "description": "The 'loop' combined fragment in a Sequence Diagram is used to show that a series of messages within the fragment will be repeated multiple times, specified by a guard condition or an iteration count.",
            "hardness": "hard"
        },
        {
            "question": "A 'State Chart Diagram' is particularly effective for modeling the behavior of objects that primarily exhibit which characteristic?",
            "options": [
                "Complex algorithmic computations.",
                "A well-defined lifecycle with distinct states and transitions between them based on events.",
                "Interactions with multiple external actors simultaneously.",
                "Deep inheritance hierarchies."
            ],
            "answer": "A well-defined lifecycle with distinct states and transitions between them based on events.",
            "description": "State Chart Diagrams (or State Machine Diagrams) are used to model the dynamic behavior of an object as it changes states in response to external events, showing its complete lifecycle.",
            "hardness": "medium"
        },
        {
            "question": "Which UML diagram is used to represent the physical deployment architecture of a system, showing computational nodes (e.g., servers, devices) and the allocation of deployable software components to these nodes?",
            "options": [
                "Component Diagram",
                "Class Diagram",
                "Deployment Diagram",
                "Object Diagram"
            ],
            "answer": "Deployment Diagram",
            "description": "Deployment Diagrams illustrate the physical layout of the system, including hardware nodes and the software artifacts (executables, libraries) that are deployed on them, and the connections between nodes.",
            "hardness": "easy"
        },
        {
            "question": "In the context of UML 'Architectural Modeling', specifically 'Artifact Diagrams', what does an 'Artifact' fundamentally represent?",
            "options": [
                "A conceptual entity that exists only during design time.",
                "A logical grouping of classes within a package.",
                "A concrete physical unit of information or software that resides on a node, such as an executable, library, or document.",
                "A behavioral interaction between objects."
            ],
            "answer": "A concrete physical unit of information or software that resides on a node, such as an executable, library, or document.",
            "description": "An Artifact in UML represents any physical piece of information that is used or produced by a software development process, such as source files, executables, database scripts, or documentation.",
            "hardness": "medium"
        },
        {
            "question": "The 'System Design process' in Object-Oriented Design typically follows which major phase of software development?",
            "options": [
                "Object-Oriented Testing",
                "Object-Oriented Analysis",
                "Software Implementation",
                "Requirements Gathering (initial stage)"
            ],
            "answer": "Object-Oriented Analysis",
            "description": "The System Design process in OOD logically follows the Object-Oriented Analysis phase, building upon the understanding of the problem domain gained during analysis to define the high-level architecture of the solution.",
            "hardness": "easy"
        },
        {
            "question": "In Object-Oriented Design, the 'Concurrency and subsystem Allocation' activity primarily addresses:",
            "options": [
                "Determining the user interface elements for each subsystem.",
                "Assigning responsibilities to individual objects within a class.",
                "Identifying concurrent tasks/threads and distributing subsystems to processing units, considering their parallel execution.",
                "Defining the internal data structures for each subsystem."
            ],
            "answer": "Identifying concurrent tasks/threads and distributing subsystems to processing units, considering their parallel execution.",
            "description": "This activity focuses on mapping the logical subsystems and their concurrent processes onto the physical hardware resources, determining how tasks will be executed in parallel and distributed across different nodes.",
            "hardness": "hard"
        },
        {
            "question": "Which phase of the Unified Process (UP) is characterized by a focus on addressing the highest risks, building an executable architectural baseline, and refining the most critical requirements?",
            "options": [
                "Inception",
                "Elaboration",
                "Construction",
                "Transition"
            ],
            "answer": "Elaboration",
            "description": "The Elaboration phase of the Unified Process aims to establish a stable architectural baseline and a robust understanding of the most critical requirements and risks, leading to an executable prototype of the core system.",
            "hardness": "medium"
        },
        {
            "question": "'Understanding requirements' in Object-Oriented Analysis is significantly enhanced by 'Iterative Development' because it specifically allows for:",
            "options": [
                "Freezing all requirements at the project's outset, preventing any changes.",
                "Gathering all requirements from a single stakeholder to avoid conflicts.",
                "Gradual refinement and validation of requirements through continuous feedback loops and successive development cycles.",
                "Automating the entire requirements documentation process without human intervention."
            ],
            "answer": "Gradual refinement and validation of requirements through continuous feedback loops and successive development cycles.",
            "description": "Iterative development allows requirements to be explored and refined incrementally over several cycles, incorporating feedback and adapting to changes, which leads to a more accurate and complete understanding.",
            "hardness": "hard"
        },
        {
            "question": "Compared to traditional procedural testing, 'Object-Oriented Testing' places a stronger emphasis on testing what fundamental components and their interactions?",
            "options": [
                "Individual functions and subroutines.",
                "Global variables and common data structures.",
                "Classes and their collaborations.",
                "System performance bottlenecks."
            ],
            "answer": "Classes and their collaborations.",
            "description": "Object-oriented testing focuses on testing the smallest reusable units, which are classes, and then verifying how these classes interact and collaborate to achieve system functionality.",
            "hardness": "easy"
        },
        {
            "question": "Which type of testing in object-oriented software engineering specifically focuses on verifying the correctness of an individual class in isolation, ensuring its attributes and operations behave as expected?",
            "options": [
                "System Testing",
                "Integration Testing",
                "Class Testing (Unit Testing)",
                "Acceptance Testing"
            ],
            "answer": "Class Testing (Unit Testing)",
            "description": "Class testing, or unit testing in an OO context, involves testing individual classes as the smallest testable units to ensure their internal logic and behavior are correct in isolation.",
            "hardness": "medium"
        },
        {
            "question": "A significant challenge in 'Inter class test case design' for object-oriented software arises from the complex interactions due to:",
            "options": [
                "The absence of any relationships between classes.",
                "The limited number of methods available in each class.",
                "The interplay of inheritance, polymorphism, and dynamic binding, leading to numerous potential interaction paths and state combinations.",
                "The fixed and predictable behavior of all objects at runtime."
            ],
            "answer": "The interplay of inheritance, polymorphism, and dynamic binding, leading to numerous potential interaction paths and state combinations.",
            "description": "The complex relationships (inheritance, aggregation, association), polymorphic behavior, and dynamic binding in OO systems create a combinatorial explosion of possible interaction scenarios between classes, making comprehensive inter-class testing challenging.",
            "hardness": "hard"
        },
        {
            "question": "'Encapsulation' in object-oriented principles primarily combines which two concepts?",
            "options": [
                "Inheritance and Polymorphism.",
                "Modularity and Abstraction.",
                "Data hiding and the bundling of data with methods.",
                "Dynamic binding and static typing."
            ],
            "answer": "Data hiding and the bundling of data with methods.",
            "description": "Encapsulation involves bundling data (attributes) and the methods that operate on that data into a single unit (a class) and hiding the internal details from external access, exposing only necessary interfaces.",
            "hardness": "medium"
        }
    ],
    "questionID": "z3F6aIXmOJOdz7IPpJONuAU"
}
