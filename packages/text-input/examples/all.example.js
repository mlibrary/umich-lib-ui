import React from "react";
import TextInput from "../src/index";

export let name = "all";

export let Example = () => (
    <TextInput
      id="email-address"
      labelText="Email address"
      descriptionText="We will only use this to send you a confirmation email."
      type="email"
      placeholder="uniqname@umich.edu"
    />
)