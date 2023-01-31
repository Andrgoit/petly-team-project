import { MdSearch } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import { Input, Form, Button } from './NewsSearchForm.styled';

function NewsSearchForm({ setQ }) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  const handleChange = e => {
    setQ(e.target.value);
  };

  return (
    <Form>
      <Input onChange={handleChange} placeholder="Search"></Input>
      <Button>
        {!isDesktop ? (
          <MdSearch style={{ width: '20', height: '20' }} />
        ) : (
          <MdSearch style={{ width: '25', height: '25' }} />
        )}
      </Button>
    </Form>
  );
}

export default NewsSearchForm;
