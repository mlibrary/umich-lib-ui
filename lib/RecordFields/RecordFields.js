import React from 'react';
import PropTypes from 'prop-types';
import './RecordFields.css';

var FieldDescription = function FieldDescription(_ref) {
  var desc = _ref.desc,
      renderAnchor = _ref.renderAnchor;

  if (Array.isArray(desc)) {
    return React.createElement(
      'ol',
      { className: 'field-nested' },
      desc.map(function (nestedDesc, i) {
        return React.createElement(
          'li',
          { className: 'field-nested__desc', key: i },
          React.createElement(FieldDescription, { desc: nestedDesc, renderAnchor: renderAnchor })
        );
      })
    );
  }

  if (desc.href) {
    return React.createElement(
      'a',
      { href: desc.href },
      desc.text
    );
  }

  if (desc.to) {
    return renderAnchor(desc);
  }

  return desc.text;
};

var Field = function Field(_ref2) {
  var field = _ref2.field,
      renderAnchor = _ref2.renderAnchor;
  var term = field.term,
      description = field.description;


  return React.createElement(
    'div',
    { className: 'record-fields__field' },
    React.createElement(
      'dt',
      { className: 'record-fields__term' },
      term
    ),
    React.createElement(
      'dd',
      { className: 'record-fields__description' },
      description.map(function (desc, i) {
        return React.createElement(
          'span',
          { className: 'record-fields__description-item', key: i },
          React.createElement(FieldDescription, { desc: desc, renderAnchor: renderAnchor })
        );
      })
    )
  );
};

var RecordFields = function RecordFields(_ref3) {
  var fields = _ref3.fields,
      renderAnchor = _ref3.renderAnchor;
  return React.createElement(
    'dl',
    { className: 'record-fields' },
    fields.map(function (field, i) {
      return React.createElement(Field, { field: field, renderAnchor: renderAnchor, key: i });
    })
  );
};

RecordFields.propTypes = {
  fields: PropTypes.array.isRequired,
  renderAnchor: PropTypes.func
};

export default RecordFields;