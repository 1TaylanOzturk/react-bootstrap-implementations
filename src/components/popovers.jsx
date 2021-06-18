import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

function Popovers() {
  const popover = (
    <Popover>
      <Popover.Title>Homo Sapiens</Popover.Title>
      <Popover.Content>
        Humans (Homo sapiens) are the most abundant and widespread species of
        primates, characterized by bipedality and large complex brains enabling
        the development of advanced tools, culture and language ... <br />
        Click{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Human"
        >
          here
        </a>{" "}
        to read more from Wiki.
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      <h2>
        Comparison of cranial ontogenetic trajectories among great apes and
        humans
      </h2>
      <p>
        Molecular data suggest that humans are more closely related to
        chimpanzees than either is to the gorillas, yet one finds the closest
        similarity in craniofacial morphology to be among the great apes to the
        exclusion of humans. To clarify how and when these differences arise in
        ontogeny, we studied ontogenetic trajectories for{" "}
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <span
            style={{ color: "#3ca1c3", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            Homo Sapiens
          </span>
        </OverlayTrigger>
        , Pan paniscus, Pan troglodytes, Gorilla gorilla and Pongo pygmaeus. A
        total of 96 traditional three-dimensional landmarks and semilandmarks on
        the face and cranial base were collected on 268 adult and sub-adult
        crania for a geometric morphometric analysis. The ontogenetic
        trajectories are compared by various techniques, including a new method,
        relative warps in size–shape space. We find that adult Homo sapiens
        specimens are clearly separated from the great apes in shape space and
        size–shape space. Around birth, Homo sapiens infants are already
        markedly different from the great apes, which overlap at this age but
        diverge among themselves postnatally. The results suggest that the small
        genetic differences between Homo and Pan affect early human ontogeny to
        induce the distinct adult human craniofacial morphology. Pure
        heterochrony does not sufficiently explain the human craniofacial
        morphology nor the differences among the African apes.
      </p>
    </div>
  );
}

export default Popovers;
