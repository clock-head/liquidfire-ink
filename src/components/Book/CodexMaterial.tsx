import Assembly from '../Modular/Assembly';
import { useNavigate } from 'react-router-dom';
import Unit from '../Modular/Unit';
import MicroUnit from '../Modular/MicroUnit';
import './CodexMaterial.css';
import Button from '../UI/Button/Button';
import { useParams } from '../../hooks/useParams';

interface CodexMaterialProps {
  codexId: string;
  title: string;
  definition?: string;
  governingPrinciple?: string;
  transformationFunction?: string;
  diagnosticQuestions?: string[];
  failureModes?: string[];
  laws?: string[];
  operationalOutputs?: string[];
}

const CodexMaterial = ({
  title,
  definition,
  governingPrinciple,
  transformationFunction,
  diagnosticQuestions,
  failureModes,
  laws,
  operationalOutputs,
}: CodexMaterialProps) => {
  const navigate = useNavigate();
  const { bookSlug, doctrineSlug } = useParams();

  const handleClick = () => {
    if (!bookSlug && !doctrineSlug) {
      return;
    }

    navigate(`/doctrines/${bookSlug}/$${doctrineSlug}`);
  };

  return (
    <Assembly
      layout="flex"
      justifyItems="center"
      flexDirection="column"
      gap="md"
      position="relative"
      className="material"
    >
      <Button
        variant="outlinelight"
        position="absolute"
        width="3"
        positionRight="0"
        positionTop="0"
        onClick={handleClick}
      >
        back
      </Button>

      <MicroUnit as="h1" h1Typography="heading" h1Color="text-primary">
        {title}
      </MicroUnit>

      <Unit layout="flex" flexDirection="column" gap="xsm" width="6">
        <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
          Definition
        </MicroUnit>
        <MicroUnit as="p" pTypography="body-small" pColor="light">
          {definition}
        </MicroUnit>
      </Unit>

      <Unit layout="flex" flexDirection="column" gap="xsm" width="6">
        <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
          Governing Principle
        </MicroUnit>
        <MicroUnit as="p" pTypography="body-small" pColor="light">
          {governingPrinciple}
        </MicroUnit>
      </Unit>

      <Unit layout="flex" flexDirection="column" gap="xsm" width="6">
        <MicroUnit
          as="h2"
          h2Typography="subtitle"
          h2Color="text-primary"
          pColor="light"
        >
          Transformation Function
        </MicroUnit>
        <MicroUnit as="p" pTypography="body-small" pColor="light">
          {transformationFunction}
        </MicroUnit>
      </Unit>
      <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
        Diagnostic Questions
      </MicroUnit>
      <ul>
        {diagnosticQuestions?.map((question, index) => (
          <li key={index}>
            <MicroUnit as="p" pTypography="body-small">
              {question}
            </MicroUnit>
          </li>
        ))}
      </ul>
      <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
        Failure Modes
      </MicroUnit>
      <MicroUnit as="p" pTypography="body-small">
        {failureModes?.join(', ')}
      </MicroUnit>
      <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
        Laws
      </MicroUnit>
      <MicroUnit as="p" pTypography="body-small">
        {laws?.join(', ')}
      </MicroUnit>
      <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
        Operational Outputs
      </MicroUnit>
      <MicroUnit as="p" pTypography="body-small">
        {operationalOutputs?.join(', ')}
      </MicroUnit>
    </Assembly>
  );
};

export default CodexMaterial;
