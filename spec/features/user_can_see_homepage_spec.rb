require "rails_helper"

feature "Home page is visible" do
  scenario "to any user" do
    visit root_path

    expect(current_path).to eq(root_path)
    expect(page).to have_content("Weclome")
  end
end
