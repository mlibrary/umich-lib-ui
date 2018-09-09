() => {
  const colors = [ "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"]
  
  return (
    <Expandable>
      <ul>
        <ExpandableChildren show={3}>
          {colors.map((color, key) => <li key={key}>{color}</li>)}
        </ExpandableChildren>
      </ul>

      <ExpandableButton
        kind="tertiary"
        name="colors"
        count={colors.length}
      />
    </Expandable>
  )
}