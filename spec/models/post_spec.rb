require 'rails_helper'

RSpec.describe Post, :type => :model do
    let(:user) { User.create(:email => 'jane@doe.com', :password => 'pw1234') }
    subject {
        described_class.new(title: "Anything",
                        description: "Lorem ipsum",
                        user_id: user.id)
    }
    it "is valid with valid attributes" do
        expect(subject).to be_valid
    end

    it "is not valid without a title" do
        subject.title = nil
        expect(subject).to_not be_valid
    end
    it "is not valid without a description" do
        subject.description = nil
        expect(subject).to_not be_valid
    end
end