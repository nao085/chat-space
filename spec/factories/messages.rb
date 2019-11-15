FactoryBot.define do
  factory :message do
    content {Facker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/text/image.jpn")}
    user
    group
  end
end